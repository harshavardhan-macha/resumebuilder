import './App.css'
import Home from './Home'
import AllResumes from './templates/AllResumes'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from './components/Features';
import About from './components/About';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resumes" element={<AllResumes />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
