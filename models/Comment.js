import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: String,
  postId: mongoose.Schema.Types.ObjectId,
});

export default mongoose.model("Comment", commentSchema);