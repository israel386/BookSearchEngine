// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    _id: ID
    bookId: String!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
}

input bookInput {
    bookId: String!
    title: String!
    description: String!
    authors: [String]
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput): User
    removeBook(bookId: String!): User
}
`;

// export the typeDefs
module.exports = typeDefs;