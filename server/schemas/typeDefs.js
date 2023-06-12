const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    # Add other book fields as needed
  }

  input BookInput {
    title: String!
    author: String!
    # Add other book input fields as needed
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    me: User
    # Add other queries as needed
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
    addUser(username: String!, email: String!, password: String!): AuthPayload
    saveBook(input: BookInput!): User
    removeBook(bookId: ID!): User
    # Add other mutations as needed
  }
`;

module.exports = typeDefs;
