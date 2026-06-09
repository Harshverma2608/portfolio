import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// POST seed default projects (run once)
router.post("/seed", async (req, res) => {
  try {
    await Project.deleteMany({});
    const defaults = [
      {
        title: "Foodster — Location-Based Food Delivery App",
        description:
          "Discover local home chefs, subscribe to healthy daily meals, and get hot food delivered straight to your desk or home. Real-time tiffin search with location-based filtering.",
        tech: ["React.js", "Tailwind CSS", "Node.js"],
        liveUrl: "https://foodster-app.vercel.app/visit",
        githubUrl: "https://github.com/harshkumarverma26/foodster",
        image: "/projects/foodster.png",
        featured: true,
        order: 1,
      },
      {
        title: "ContentBroadcast — Educational Broadcasting Platform",
        description:
          "A streamlined system for teachers to share content and principals to keep quality in check. Features upload & schedule, principal approval workflow, and live broadcast with auto-rotation.",
        tech: ["Node.js", "JavaScript", "Express.js", "React.js"],
        liveUrl: "https://content-broadcasting-system-seven.vercel.app/login",
        githubUrl: "https://github.com/harshkumarverma26/content-broadcasting",
        image: "/projects/contentbroadcast.png",
        featured: true,
        order: 2,
      },
      {
        title: "A&A Movies — Event Photography Website",
        description:
          "Traditional portraiture and cinematic event coverage for life's most sacred transitions. Multi-section site with gallery, services, packages, albums, and session booking.",
        tech: ["React.js", "CSS3", "Vercel"],
        liveUrl: "https://aamovies.vercel.app",
        githubUrl: "https://github.com/harshkumarverma26/aa-movies",
        image: "/projects/aamovies.png",
        featured: false,
        order: 3,
      },
    ];
    const inserted = await Project.insertMany(defaults);
    res.json({ message: "Seeded successfully", count: inserted.length });
  } catch (err) {
    res.status(500).json({ error: "Seed failed" });
  }
});

export default router;
