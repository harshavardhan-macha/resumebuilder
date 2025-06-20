export const EducationStep = ({ formData, updateArray, setFormData, validationErrors }) => (
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
            onChange={(e) => updateArray("education", index, "institution", e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="eg. Harvard University"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Degree *</label>
          <input
            type="text"
            value={edu.degree}
            onChange={(e) => updateArray("education", index, "degree", e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="eg. Bachelor of Science"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start</label>
            <input
              type="month"
              value={edu.start}
              onChange={(e) => updateArray("education", index, "start", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End</label>
            <input
              type="month"
              value={edu.end}
              onChange={(e) => updateArray("education", index, "end", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
      </div>
    ))}
    {validationErrors.education && (
      <p className="text-red-500 text-sm mb-4">{validationErrors.education}</p>
    )}
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