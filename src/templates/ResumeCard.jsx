
const ResumeCard = ({ data }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{data.fullName}</h2>
      <p>{data.email} | {data.phone}</p>
      <p className="mt-2 text-gray-600">{data.summary}</p>

      <h3 className="font-semibold mt-4">Education</h3>
      <ul>
        {data.education.map((edu, i) => (
          <li key={i}>
            {edu.degree} at {edu.institution} ({edu.start} - {edu.end})
          </li>
        ))}
      </ul>

      <h3 className="font-semibold mt-4">Skills</h3>
      <p>{data.skills.join(", ")}</p>
    </div>
  );
};
export default ResumeCard;