export const ExperienceStep = ({ formData, updateArray, setFormData }) => (
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