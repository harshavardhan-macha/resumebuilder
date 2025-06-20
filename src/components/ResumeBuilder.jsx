import { useState } from "react";
import PersonalStep from "./steps/PersonalStep";
import { EducationStep } from "./steps/EducationStep";
import { ExperienceStep } from "./steps/ExperienceStep";
import { SkillsStep } from "./steps/SkillsStep";
import { ProjectsStep } from "./steps/ProjectsStep";
import { ReviewStep } from "./steps/ReviewStep";
import { SubmitSuccess } from "./steps/SubmitSuccess";
import { SubmitError } from "./steps/SubmitError";

const steps = [
  "Personal Info",
  "Education",
  "Experience",
  "Skills",
  "Projects",
  "Review",
];

const ResumeBuilder = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    summary: "",
    dob: "",
    address: "",
    linkedin: "",
    github: "",
    education: [{ institution: "", degree: "", start: "", end: "" }],
    experience: [{ role: "", company: "", start: "", end: "", description: "" }],
    skills: [],
    projectTitle: "",
    projectDesc: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const updateArray = (section, index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev[section]];
      updated[index][field] = value;
      return { ...prev, [section]: updated };
    });
  };

 const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "skills") {
    setFormData((prev) => ({
      ...prev,
      skills: Array.isArray(value)
        ? value
        : value?.split(",").map((s) => s.trim()),
    }));
  } else {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
};


  const handleNext = () => {
    const errors = {};
    if (step === 0) {
      if (!formData.fullName.trim()) errors.fullName = "Full name is required";
      if (!formData.email.trim()) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = "Please enter a valid email address";
      }
      if (!formData.phone.trim()) errors.phone = "Phone number is required";
    }
    if (step === 1) {
      const filled = formData.education.some(
        (edu) => edu.institution.trim() && edu.degree.trim()
      );
      if (!filled) errors.education = "At least one education entry is required";
    }
    if (step === 3 && !formData.skills.length) {
      errors.skills = "Please enter at least one skill";
    }
    if (step === 4) {
      if (!formData.projectTitle.trim()) errors.projectTitle = "Project title is required";
      if (!formData.projectDesc.trim()) errors.projectDesc = "Project description is required";
    }
    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // 1. Get AI suggestions
    const aiRes = await fetch("http://localhost:8000/api/ai-suggest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    });

    const aiData = await aiRes.json();
    const aiSuggestions = aiData.suggestions || "No suggestions available.";

    // 2. Combine formData with aiSuggestions
    const finalData = {
      ...formData,
      aiSuggestions,
    };

    // 3. Send to backend
    const res = await fetch("http://localhost:8000/api/resume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalData),
    });

    if (res.ok) {
      setSubmitStatus("success");
    } else {
      setSubmitStatus("error");
    }
  } catch (err) {
    console.error("Error submitting resume:", err);
    setSubmitStatus("error");
  }
};



  const renderStep = () => {
    switch (step) {
      case 0:
        return <PersonalStep formData={formData} handleChange={handleChange} validationErrors={validationErrors} />;
      case 1:
        return <EducationStep formData={formData} updateArray={updateArray} setFormData={setFormData} validationErrors={validationErrors} />;
      case 2:
        return <ExperienceStep formData={formData} updateArray={updateArray} setFormData={setFormData} />;
      case 3:
        return <SkillsStep formData={formData} handleChange={handleChange} validationErrors={validationErrors} />;
      case 4:
        return <ProjectsStep formData={formData} handleChange={handleChange} validationErrors={validationErrors} />;
      case 5:
        return <ReviewStep formData={formData} />;
      default:
        return null;
    }
  };

  if (submitStatus === "success") return <SubmitSuccess />;
  if (submitStatus === "error") return <SubmitError />;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Smart Resume Builder</h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Step {step + 1} of {steps.length} - {steps[step] || "Submit"}
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
          {renderStep()}
        </form>
        <div className="mt-10 flex justify-between items-center">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className={`px-6 py-2 rounded-full font-medium ${
              step === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            ⬅ Back
          </button>
          {step === steps.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 rounded-full font-semibold text-white bg-green-600 hover:bg-green-700"
            >
              🚀 Submit Resume
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-700"
            >
              {step === steps.length - 2 ? "✨ Review" : "Next ➡"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
