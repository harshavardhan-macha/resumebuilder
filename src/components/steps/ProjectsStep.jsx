export const ProjectsStep = ({ formData, handleChange, validationErrors }) => (
  <>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Project Title *</label>
      <input
        type="text"
        name="projectTitle"
        value={formData.projectTitle}
        onChange={handleChange}
        className={`input border border-gray-300 rounded-md p-2 w-full ${validationErrors.projectTitle ? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Smart Resume Builder"
      />
      {validationErrors.projectTitle && (
        <p className="text-red-500 text-sm mt-1">{validationErrors.projectTitle}</p>
      )}
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Project Description *</label>
      <textarea
        name="projectDesc"
        value={formData.projectDesc}
        onChange={handleChange}
        className={`input border border-gray-300 rounded-md p-2 w-full ${validationErrors.projectDesc ? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Built a resume builder using React, Node.js and AI APIs..."
      />
      {validationErrors.projectDesc && (
        <p className="text-red-500 text-sm mt-1">{validationErrors.projectDesc}</p>
      )}
    </div>
  </>
);
