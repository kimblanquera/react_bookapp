const BookDto: string = `
    type Book {
        id: ID!
        title: String!
        authors: [String!]!
        images: BookImage
        description: String
        pageCount: Int!,
        publishedDate: String!
        categories: [String!]
        rating: Float
        shelves: [String!]!
        dateRead: String
        dateAdded: String
        owned: Boolean
        progress: [Progress]
        lists: [String!]
    }

    type Query {
        getBookByID: Book
        getAllBooks: [Book]
    }

    type Mutation {
        addBook(): Book
        addBookToShelf(): Book
        updateBook(): Book
        rateBook(): Book
        updateOwnership(): Book
    }
`

export default BookDto;