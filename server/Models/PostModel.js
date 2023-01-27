import mongoose from "mongoose";

const postSchema = mongoose.Schema(
	{
		userId: { type: String, required: true },
		title: String,
		body: String
		
	},
	{
		timestamps: true,
	}
);

const PostModel = mongoose.model("Posts", postSchema);

export default PostModel;
