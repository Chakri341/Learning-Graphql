
const users = [
  { id: "1", name: "Chakri" },
  { id: "2", name: "Ram" },
];

const posts = [
  { id: "1", title: "Hello World", userId: "1" },
  { id: "2", title: "GraphQL is awesome", userId: "1" },
];

const comments = [
  { id: "1", text: "Nice post!", postId: "1" },
  { id: "2", text: "Loved it!", postId: "1" },
];

const resolvers = {
  Query: {
    users: () => users,
    posts: () => posts,
  },

  Mutation: {
    addUser: (_, { name }) => {
      const newUser = {
        id: Date.now().toString(),
        name,
      };
      users.push(newUser);
      return newUser;
    },

    addPost: (_, { title, userId }) => {
      const newPost = {
        id: Date.now().toString(),
        title,
        userId,
      };
      posts.push(newPost);
      return newPost;
    },

    addComment: (_, { text, postId }) => {
      const newComment = {
        id: Date.now().toString(),
        text,
        postId,
      };
      comments.push(newComment);
      return newComment;
    },
  },

  // RELATIONS (VERY IMPORTANT 🔥)

  User: {
    posts: (parent) => {
      return posts.filter((p) => p.userId === parent.id);
    },
  },

  Post: {
    user: (parent) => {
      return users.find((u) => u.id === parent.userId);
    },

    comments: (parent) => {
      return comments.filter((c) => c.postId === parent.id);
    },
  },
};

export default resolvers;