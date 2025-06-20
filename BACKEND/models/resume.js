const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  start: String,
  end: String,
});

const experienceSchema = new mongoose.Schema({
  company: String,
  role: String,
  start: String,
  end: String,
  description: String,
});

const resumeSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  dob: String,
  address: String,
  linkedin: String,
  github: String,
  summary: String,
  education: [educationSchema],
  experience: [experienceSchema],
  skills: [String],
  projectTitle: String,
  projectDesc: String,
  aiSuggestions: String , // ✅ must be present

}, { timestamps: true });

module.exports = mongoose.model("Resume", resumeSchema);
