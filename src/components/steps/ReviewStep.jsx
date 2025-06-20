export const ReviewStep = ({ formData }) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-2xl font-bold text-blue-700 mb-4">Resume Preview</h2>
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
      <p><strong>Full Name:</strong> {formData.fullName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Date of Birth:</strong> {formData.dob}</p>
      <p><strong>Address:</strong> {formData.address}</p>
      <p><strong>LinkedIn:</strong> <a href={formData.linkedin} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{formData.linkedin}</a></p>
      <p><strong>GitHub:</strong> <a href={formData.github} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{formData.github}</a></p>
    </div>
    {formData.summary && (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Summary</h3>
        <p className="text-gray-700">{formData.summary}</p>
      </div>
    )}
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Education</h3>
      {formData.education.map((edu, index) => (
        <div key={index} className="mb-3 border-l-4 border-blue-500 pl-3">
          <p className="font-medium">{edu.degree} at {edu.institution}</p>
          <p className="text-sm text-gray-600">{edu.start} - {edu.end}</p>
        </div>
      ))}
    </div>
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Experience</h3>
      {formData.experience.map((exp, index) => (
        <div key={index} className="mb-3 border-l-4 border-green-500 pl-3">
          <p className="font-medium">{exp.role} at {exp.company}</p>
          <p className="text-sm text-gray-600">{exp.start} - {exp.end}</p>
          <p className="text-gray-700">{exp.description}</p>
        </div>
      ))}
    </div>
    {formData.skills.length > 0 && (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {formData.skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>
    )}
   {formData.aiSuggestions && (
  <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
    <h3 className="font-bold text-yellow-700">💡 AI Suggestions</h3>
    <pre className="whitespace-pre-wrap text-sm mt-2 text-gray-700">{formData.aiSuggestions}</pre>
  </div>
)}
  </div>
);
