export const SkillsStep = ({ formData, handleChange, validationErrors }) => (
  <div className="col-span-2">
    <label className="block text-sm font-medium text-gray-700 mb-1">Your Key Skills *</label>
    <input
      type="text"
      name="skills"
      value={formData.skills.join(", ")}
      onChange={handleChange}
      className={`input border rounded-md p-2 w-full ${validationErrors.skills ? 'border-red-500' : 'border-gray-300'}`}
      placeholder="React, Node.js, MongoDB"
    />
    {validationErrors.skills && (
      <p className="text-red-500 text-sm mt-1">{validationErrors.skills}</p>
    )}
  </div>
);
