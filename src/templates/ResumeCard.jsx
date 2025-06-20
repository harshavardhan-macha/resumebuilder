import html2pdf from "html2pdf.js";

const ResumeCard = ({ data }) => {
  const downloadPDF = () => {
    const element = document.getElementById(`resume-${data._id}`);
    html2pdf().from(element).save(`${data.fullName}-resume.pdf`);
  };
  console.log("ResumeCard data:", data);

  return (
    <div className="bg-gray-100 py-8 px-4 rounded-lg shadow mb-8">
      <div
        id={`resume-${data._id}`}
        className="bg-white max-w-4xl mx-auto rounded-lg p-8 shadow text-gray-800"
      >
        {/* Header */}
        <div className="text-center border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold">{data.fullName}</h1>
          <p className="text-sm text-gray-600">{data.email} | {data.phone}</p>
          <p className="text-sm">{data.address}</p>
          {data.linkedin && <p className="text-sm text-blue-600">LinkedIn: {data.linkedin}</p>}
          {data.github && <p className="text-sm text-gray-700">GitHub: {data.github}</p>}
        </div>

        {/* Summary */}
        {data.summary && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b mb-2">Summary</h2>
            <p>{data.summary}</p>
          </section>
        )}

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">{edu.degree}</p>
              <p>{edu.institution}</p>
              <p className="text-sm text-gray-600">{edu.start} - {edu.end}</p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">{exp.role}</p>
              <p>{exp.company}</p>
              <p className="text-sm text-gray-600">{exp.start} - {exp.end}</p>
              <p className="text-sm">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Projects</h2>
          <p className="font-semibold">{data.projectTitle}</p>
          <p>{data.projectDesc}</p>
        </section>
      </div>

      {/* Download Button */}
      <div className="text-center mt-4">
        <button
          onClick={downloadPDF}
          className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
        >
          ⬇ Download as PDF
        </button>
      </div>
      {/* AI Suggestions */}
{data.aiSuggestions && (
  <section className="mb-6">
    <h2 className="text-xl font-semibold border-b mb-2 text-blue-700">💡 AI Suggestions</h2>
    <pre className="whitespace-pre-wrap text-sm text-gray-800 bg-blue-50 p-3 rounded-lg">
      {data.aiSuggestions}
    </pre>
  </section>
)}

    </div>
  );
};

export default ResumeCard;
