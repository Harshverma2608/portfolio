import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import projectRoutes from "./routes/projects.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);
app.get("/api/health", (_, res) => res.json({ status: "ok" }));

// Start server immediately — don't wait on MongoDB
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Connect MongoDB in background
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/portfolio")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.warn("MongoDB not connected (emails still work):", err.message));
