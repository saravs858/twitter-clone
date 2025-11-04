import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  username: String,
  title: String,
  posttext: String,
  comments: [String]
});

const Post = mongoose.model("Post", PostSchema);

export default Post;  // <--- Adicione esta linha
