import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

// listar posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Erro ao listar posts" });
  }
});

// criar post
router.post("/", async (req, res) => {
  try {
    const { title, text, user } = req.body;
    if (!title || !text || !user) return res.status(400).json({ error: "Campos obrigatórios!" });
    const post = new Post({ title, text, user });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar post" });
  }
});

export default router;
