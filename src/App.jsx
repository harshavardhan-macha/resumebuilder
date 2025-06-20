import './App.css'
import Home from './Home'
import AllResumes from './templates/AllResumes'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resumes" element={<AllResumes />} />
      </Routes>
    </Router>
  )
}

export default App
