// pages/api/graphql.js
import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient, ObjectId, mongodb } from 'mongodb'
import CreateUserInput from '../../data/models/user'
import { PasswordUtil } from '../../utils/bcrypt/PasswordUtil'

const typeDefs = gql`

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    image: String
    password: String
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    login(input: LoginInput!): User
    getUsers: [User]
    getUserById(id: String!): User
  }

  type Mutation {
    createUser(input: CreateUserInput): User
  }
`

const resolvers = {
  Query: {
    getUsers(parent, args, context) {
      return context.db.collection('users').find({}).toArray().then((data) => {
        return data;
      })
    },
    getUserById(parent, args, context) {
      const objectId: mongodb.ObjectId = new ObjectId(args.id);
      return context.db.collection('users').findOne({_id: objectId}).then((data) => {
        return data;
      })
    },
    async login(parent, args, context) {
      const email: string = args.input.email;
      const rawPassword: string = args.input.password;
      const user = await context.db.collection('users').findOne({email: email});
      if(user?._id) {
        const match = PasswordUtil.comparePassword(rawPassword, user.password);
        if(match) {
          return {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
          };
        }
        else {
          throw new Error("not a match");
        }
      }
      else {
        throw new Error('user not found');
      }
    }
  },
  Mutation: {
    async createUser(parent, args, context) {
      const input: CreateUserInput = {
        ...args.input,
        password: await PasswordUtil.hashPassword(args.input.password)
      }

      return context.db.collection('users').insertOne(input).then((data) => {
        if(data?.insertedId) {
          return (data.ops as Array<Object>)[0];
        }
        else {
          return null;
        }
      });
    }
  }
}

const schema = makeExecutableSchema({ typeDefs, resolvers });
let db;

export const config = {
  api: {
    bodyParser: false,
  },
}

const apolloServer = new ApolloServer({
  schema,
  context: async() => {
    if(!db) {
      try {
        const dbClient: mongodb.MongoClient = new MongoClient(process.env.MONGO_CLIENT, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        if(!dbClient.isConnected()) {
          await dbClient.connect();
          db = dbClient.db('bookApp');
        }
      }
      catch(e) {
        console.log('--->error while connecting with graphql context (db)', e);
      }
    }
    return { db };
  }
})
export default apolloServer.createHandler({ path: '/api/graphql' })