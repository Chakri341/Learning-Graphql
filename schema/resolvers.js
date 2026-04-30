import User from "../models/User.js";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

const resolvers = {
  Query: {
    users: async () => await User.find(),
    posts: async () => await Post.find(),
  },

  Mutation: {
    addUser: async (_, { name }) => {
      const user = new User({ name });
      return await user.save();
    },

    addPost: async (_, { title, userId }) => {
      const post = new Post({ title, userId });
      return await post.save();
    },

    addComment: async (_, { text, postId }) => {
      const comment = new Comment({ text, postId });
      return await comment.save();
    },
  },

  User: {
    posts: async (parent) => {
      return await Post.find({ userId: parent.id });
    },
  },

  Post: {
    user: async (parent) => {
      return await User.findById(parent.userId);
    },

    comments: async (parent) => {
      return await Comment.find({ postId: parent.id });
    },
  },
};

export default resolvers;