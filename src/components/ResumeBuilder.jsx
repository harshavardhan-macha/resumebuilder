import { useState } from "react";

const steps = ["Personal Info", "Education", "Experience", "Skills", "Projects", "Review"];

const ResumeBuilder = () => {
  const [validationErrors, setValidationErrors] = useState({});
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
  const handleBack = () => {
  setStep((prev) => Math.max(prev - 1, 0));
};


  const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "skills") {
    setFormData((prev) => ({ ...prev, skills: value.split(",").map((skill) => skill.trim()) }));
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

  if (step === 3) {
    if (!formData.skills.length) errors.skills = "Please enter at least one skill";
  }

  if (step === 4) {
    if (!formData.projectTitle.trim()) errors.projectTitle = "Project title is required";
    if (!formData.projectDesc.trim()) errors.projectDesc = "Project description is required";
  }

  setValidationErrors(errors);

  if (Object.keys(errors).length > 0) return;

  setStep((prev) => Math.min(prev + 1, steps.length - 1));
};

  const updateArray = (section, index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev[section]];
      updated[index][field] = value;
      return { ...prev, [section]: updated };
    });
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
className={`input border rounded-md p-2 w-full ${
    validationErrors.fullName ? "border-red-500" : "border-gray-300"
  }`}                placeholder="John Doe"
              />
              {validationErrors.fullName && (
  <p className="text-red-500 text-sm mt-1">{validationErrors.fullName}</p>
)}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
className={`input border rounded-md p-2 w-full ${
    validationErrors.fullName ? "border-red-500" : "border-gray-300"
  }`}                placeholder="john@example.com"
              />
            {validationErrors.email && (
  <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
)}

            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
className={`input border rounded-md p-2 w-full ${
    validationErrors.fullName ? "border-red-500" : "border-gray-300"
  }`}                placeholder="+91-9876543210"
              />
             {validationErrors.phone && (
  <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
)}

            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="input border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input border border-gray-300 rounded-md p-2 w-full"
                placeholder="123, Street Name, City,ate - ZIP"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="input border border-gray-300 rounded-md p-2 w-full"
                placeholder="https://linkedin.com/in/yourname"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">GitHub / Portfolio URL</label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="input border border-gray-300 rounded-md p-2 w-full"
                placeholder="https://github.com/yourname"
              />
            </div>
          </>
        );

      case 1:
        return (
          <>
            {formData.education.map((edu, index) => (
              <div key={index} className="border border-gray-300 p-4 rounded-lg mb-4 col-span-2 bg-gray-50">
                <h3 className="text-md font-semibold text-blue-700 mb-4">
                  🎓 Education #{index + 1}
                </h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Institution *</label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) =>
                      updateArray("education", index, "institution", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Degree *</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      updateArray("education", index, "degree", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start</label>
                    <input
                      type="month"
                      value={edu.start}
                      onChange={(e) =>
                        updateArray("education", index, "start", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End</label>
                    <input
                      type="month"
                      value={edu.end}
                      onChange={(e) =>
                        updateArray("education", index, "end", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  education: [
                    ...prev.education,
                    { institution: "", degree: "", start: "", end: "" },
                  ],
                }))
              }
              className="text-sm px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              ➕ Add Education
            </button>
          </>
        );

      case 2:
        return (
          <>
            {formData.experience.map((exp, index) => (
              <div key={index} className="border border-gray-300 p-4 rounded-lg mb-4 col-span-2">
                <h3 className="text-md font-semibold text-blue-700 mb-2">Experience #{index + 1}</h3>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  value={exp.company}
                  onChange={(e) => updateArray("experience", index, "company", e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                />
                <label className="block text-sm font-medium text-gray-700 mb-1">Role / Position</label>
                <input
                  value={exp.role}
                  onChange={(e) => updateArray("experience", index, "role", e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                />
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input
                  type="month"
                  value={exp.start}
                  onChange={(e) => updateArray("experience", index, "start", e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                />
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <input
                  type="month"
                  value={exp.end}
                  onChange={(e) => updateArray("experience", index, "end", e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                />
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={exp.description}
                  onChange={(e) => updateArray("experience", index, "description", e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  experience: [
                    ...prev.experience,
                    { company: "", role: "", start: "", end: "", description: "" },
                  ],
                }))
              }
              className="text-sm px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              ➕ Add Experience
            </button>
          </>
        );

      case 3:
        return (
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Key Skills *</label>
            <input
              type="text"
              name="skills"
              value={formData.skills.join(", ")}
              onChange={handleChange}
              className="input border border-gray-300 rounded-md p-2 w-full"
              placeholder="React, Node.js, MongoDB"
            />
          </div>
        );

      case 4:
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Title *</label>
              <input
                type="text"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                className="input border border-gray-300 rounded-md p-2 w-full"
                placeholder="Smart Resume Builder"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Description *</label>
              <textarea
                name="projectDesc"
                value={formData.projectDesc}
                onChange={handleChange}
                className="input border border-gray-300 rounded-md p-2 w-full"
                placeholder="Built a resume builder using React, Node.js and AI APIs..."
              />
            </div>
          </>
        );

      case 5:
        return (
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
        );

      default:
        return null;
    }
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8000/api/resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("🎉 Resume submitted successfully!");
      setFormData({
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
      setStep(0);
    } else {
      alert("❌ Failed to submit resume. Please try again.");
    }
  } catch (error) {
    console.error("Submit error:", error);
    alert("🚨 Server error. Please try again later.");
  }
};


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Smart Resume Builder</h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Step {step + 1} of {steps.length} - {steps[step]}
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
        <div className="min-h-[400px]">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderStep()}
          </form>
        </div>
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
