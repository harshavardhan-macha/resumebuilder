require("dotenv").config();
const express = require("express");
const router = express.Router();
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: "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",
});
router.post("/", async (req, res) => {
  const { formData } = req.body;

  if (!formData) {
    return res.status(400).json({ error: "Missing formData" });
  }

  try {
    const prompt = `
You're a professional resume coach. Improve the following resume sections: Summary, Skills, Education, Experience, and Projects.

Resume:
${JSON.stringify(formData, null, 2)}

Respond with professional suggestions grouped by section.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const suggestions = completion.choices[0].message.content;
    res.json({ suggestions });
  }catch (err) {
  if (err.code === "insufficient_quota") {
    // Send mock suggestion if quota is over
    return res.json({
      suggestions: `
**Summary**: A goal-driven React developer passionate about building high-impact UIs.

**Skills**: React, Node.js, Express, MongoDB, Git, Tailwind CSS

**Projects**: Smart Resume Builder - Built using React and OpenAI to assist resume generation.

**Experience**: Intern at TechSoft - Improved performance of frontend apps.
      `,
    });
  }

  console.error("OpenAI Error:", err.message);
  res.status(500).json({ error: "AI Suggestion Failed" });
}

});

module.exports = router;
