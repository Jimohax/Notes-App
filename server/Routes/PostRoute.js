import express from "express";
import { createPost, deletePost, getPost, getTimelinePost, likePost, updatePost } from "../Controllers/PostController.js";

const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
