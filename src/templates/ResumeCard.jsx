import html2pdf from "html2pdf.js";

const ResumeCard = ({ data }) => {
  const downloadPDF = () => {
    const element = document.getElementById(`resume-${data._id}`);
    html2pdf().from(element).save(`${data.fullName}-resume.pdf`);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 relative">
      {/* PDF Content Wrapper */}
      <div
        id={`resume-${data._id}`}
        className="bg-white p-6 rounded-md text-gray-800 max-w-3xl mx-auto"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">{data.fullName}</h1>
          <p>{data.email} | {data.phone}</p>
          {data.linkedin && <p>LinkedIn: {data.linkedin}</p>}
          {data.github && <p>GitHub: {data.github}</p>}
          <p>{data.address}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">Professional Summary</h2>
          <p>{data.summary}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">Education</h2>
          <ul className="space-y-2">
            {data.education.map((edu, i) => (
              <li key={i}>
                <strong>{edu.degree}</strong>, {edu.institution} ({edu.start} - {edu.end})
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">Experience</h2>
          <ul className="space-y-2">
            {data.experience.map((exp, i) => (
              <li key={i}>
                <strong>{exp.role}</strong> at {exp.company} ({exp.start} - {exp.end})
                <p className="ml-2 text-sm text-gray-600">{exp.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">Projects</h2>
          <h4 className="font-bold">{data.projectTitle}</h4>
          <p>{data.projectDesc}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">Skills</h2>
          <p>{data.skills.join(", ")}</p>
        </div>
      </div>

      {/* PDF Button */}
      <div className="text-right mt-4">
        <button
          onClick={downloadPDF}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ⬇ Download PDF
        </button>
      </div>
    </div>
  );
};

export default ResumeCard;
