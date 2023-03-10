import PostModel from "../Models/PostModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";

// Create new post
export const createPost = async (req, res) => {
	const newPost = new PostModel(req.body);

	try {
		await newPost.save();
		res.status(200).json(newPost);
	} catch (error) {
		res.status(500).json(error);
	}
};

// Get a post
export const getPost = async (req, res) => {
	const id = req.params.id;

	try {
		const post = await PostModel.findById(id);
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json(error);
	}
};

// UPDATE A POST

export const updatePost = async (req, res) => {
	const postId = req.params.id;
	const { userId } = req.body;

	try {
		const post = await PostModel.findById(postId);

		if (post.userId === userId) {
			await post.updateOne({ $set: req.body });
			res.status(200).json("Post Updated");
		} else {
			res.status(403).json("Action Forbidden");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

// DELETE A POST

export const deletePost = async (req, res) => {
	const postId = req.params.id;
	const { userId } = req.body;

	try {
		const post = await PostModel.findById(postId);

		if (post.userId === userId) {
			await post.deleteOne();
			res.status(200).json("Post Deleted Successfully");
		} else {
			res.status(403).json("Action Forbidden");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

