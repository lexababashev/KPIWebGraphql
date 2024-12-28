import Post from '../models/Post.js';


const resolvers = {
  Query: {
    getPosts: async () => await Post.find(),
    getPost: async (_, { id }) => await Post.findById(id),
  },

  Mutation: {
    createPost: async (_, { title, author, text }) => {
      const newPost = new Post({ title, author, text });
      return await newPost.save();
    },
    updatePost: async (_, { id, title, author, text }) => {
      return await Post.findByIdAndUpdate(
        id,
        { title, author, text },
        { new: true }
      );
    },
    deletePost: async (_, { id }) => {
      await Post.findByIdAndDelete(id);
      return `Post with ID ${id} was deleted`;
    },
  },
};

export default resolvers;
