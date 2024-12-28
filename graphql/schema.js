import { makeExecutableSchema } from '@graphql-tools/schema';

// Описание схемы
const typeDefs = `
  type Post {
    id: ID!
    title: String!
    author: String!
    text: String!
    createdAt: String
    updatedAt: String
  }

  type Query {
    getPosts: [Post]
    getPost(id: ID!): Post
  }

  type Mutation {
    createPost(title: String!, author: String!, text: String!): Post
    updatePost(id: ID!, title: String, author: String, text: String): Post
    deletePost(id: ID!): String
  }
`;

export default typeDefs;
