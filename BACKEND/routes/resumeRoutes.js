const express = require("express");
const router = express.Router();
const Resume = require("../models/resume");

// POST: Save resume
router.post("/", async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json({ message: "Resume saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save resume" });
  }
});

// GET: Get all resumes
router.get("/", async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch resumes" });
  }
});

module.exports = router;
