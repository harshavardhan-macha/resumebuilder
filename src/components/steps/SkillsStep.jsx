import { useState } from "react";

export const SkillsStep = ({ formData, handleChange, validationErrors }) => {
  const [input, setInput] = useState("");

  const addSkill = () => {
    const trimmed = input.trim();
    if (trimmed && !formData.skills.includes(trimmed)) {
      handleChange({
        target: {
          name: "skills",
          value: [...formData.skills, trimmed],
        },
      });
    }
    setInput("");
  };

  const removeSkill = (index) => {
    const updatedSkills = [...formData.skills];
    updatedSkills.splice(index, 1);
    handleChange({
      target: {
        name: "skills",
        value: updatedSkills,
      },
    });
  };

  return (
    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Your Key Skills *
      </label>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-2 mb-2">
        {formData.skills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
          >
            {skill}
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="ml-2 text-blue-500 hover:text-red-500 font-bold"
              title="Remove skill"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Skill Input & Button */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a skill"
          className={`flex-1 input border rounded-md p-2 ${
            validationErrors.skills ? "border-red-500" : "border-gray-300"
          }`}
        />
        <button
          type="button"
          onClick={addSkill}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          ➕ Add Skill
        </button>
      </div>

      {/* Validation Message */}
      {validationErrors.skills && (
        <p className="text-red-500 text-sm mt-1">{validationErrors.skills}</p>
      )}
    </div>
  );
};
