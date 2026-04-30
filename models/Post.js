import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  userId: mongoose.Schema.Types.ObjectId,
});

export default mongoose.model("Post", postSchema);