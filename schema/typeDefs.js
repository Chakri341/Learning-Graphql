import { gql } from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    user: User
    comments: [Comment]
  }

  type Comment {
    id: ID!
    text: String!
  }

  type Query {
    users: [User]
    posts: [Post]
  }

  type Mutation {
    addUser(name: String!): User
    addPost(title: String!, userId: ID!): Post
    addComment(text: String!, postId: ID!): Comment
  }
`;

export default typeDefs;