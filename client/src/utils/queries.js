import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
    me: User
  }
`;
