const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { formData } = req.body;

  if (!formData) {
    return res.status(400).json({ error: "formData missing" });
  }

  // Always return mock suggestions
  const mock = `
**Summary**: Passionate frontend developer with strong skills in React and backend knowledge in Node.js.

**Skills**: React, Node.js, Tailwind, MongoDB, Git, Express

**Projects**: Smart Resume Builder – Developed a dynamic resume generator with AI-powered suggestions.

**Experience**: Internship at XYZ Tech – Built reusable UI components using React.

**Education**: B.Tech CSE, GIET – 2021 to 2025
  `;

  return res.json({ suggestions: mock });
});

module.exports = router;
