import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/Comments.js";
import userRoutes from "./routes/users.js"; 

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://twiterclone1_db_user:twiterdb@cluster0.z4iuw4h.mongodb.net/twiter")
  .then(() => console.log("✅ Banco conectado!"))
  .catch((err) => console.error("❌ Erro ao conectar ao banco:", err));

app.get("/", (req, res) => {
  res.send("Servidor tá de pé 😎");
});

app.use("/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/users", userRoutes); 

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
