import { useQuery, useMutation, gql } from '@apollo/client';
import { DocumentNode } from 'graphql';
import { PasswordUtil } from '../../../utils/bcrypt/PasswordUtil';

const GET_USERS: DocumentNode = gql `
    query {
        getUsers {
            _id,
            email,
            firstName,
            lastName
        }
    }
`

export function createUserQuery(): string {
    const query: string = `
        mutation CreateUser($input: CreateUserInput!) {
            createUser(input: $input) {
                _id,
                email,
                firstName,
                lastName
            }
        }
    `
    return query;
}

export function createGetUserByIdQuery(id: string) {
    const query: string = `
        query {
            getUserById(id: String!) {
                _id,
                firstName,
                lastName,
                email,
                image
            }
        }
    `
}

export async function getUserById(id: string) {
    const result = await useQuery(gql `${createGetUserByIdQuery(id)}`);
    if(result.error) {
        throw new Error(result.error.message)
    }
    else {
        return result.data.getUserById;
    }
}

export async function GetUsers() {
    const result = await useQuery(GET_USERS);
    if(result.error) {
        throw new Error(result.error.message)
    }
    else {
        return result.data.getUsers;
    }
}

async function getPasswordHash(rawPassword: string) {
    const passwordHash: string = await PasswordUtil.hashPassword(rawPassword);
    return passwordHash;
}

export default function Users() {}