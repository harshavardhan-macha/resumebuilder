const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const resumeRoutes = require("./routes/resumeRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
const aiSuggest = require("./routes/aiSuggest");
app.use("/api/ai-suggest", aiSuggest);
app.use("/api/resume", resumeRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes example
app.get("/", (req, res) => {
  res.send("Resume Builder Backend is Running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
