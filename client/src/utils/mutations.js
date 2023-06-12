import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  input CreateUserInput {
    username: String!
    email: String!
  }

  type CreateUserPayload {
    user: User
  }

  input UpdateUserInput {
    id: ID!
    username: String
    email: String
  }

  type UpdateUserPayload {
    user: User
  }

  type DeleteUserPayload {
    success: Boolean
  }

  type Mutation {
    createUser(input: CreateUserInput!): CreateUserPayload
    updateUser(input: UpdateUserInput!): UpdateUserPayload
    deleteUser(id: ID!): DeleteUserPayload
  }
`;
