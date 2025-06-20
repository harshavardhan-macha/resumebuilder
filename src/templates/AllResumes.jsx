import { useEffect, useState } from "react";
import ResumeCard from "../templates/ResumeCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
const AllResumes = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/resume")
      .then((res) => res.json())
      .then((data) => setResumes(data))
      .catch((err) => console.error("Error fetching resumes:", err));
  }, []);

  return (
    <>
     <Header />
    <div className="p-6  gap-6 flex justify-center flex-wrap">
     
      {resumes.map((resume) => (
        <ResumeCard key={resume._id} data={resume} />
      ))}
    </div>
    <Footer />
    </>
  );
};
export default AllResumes;