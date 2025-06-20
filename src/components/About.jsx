import aboutData from "./aboutData";
import Header from "./Header";
import Footer from "./Footer";

const About = () => (
    <>
    <Header />

  <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-3xl font-bold text-blue-700">{aboutData.title}</h1>
    <h2 className="text-xl text-gray-700 mt-2">{aboutData.subtitle}</h2>
    <p className="text-gray-600 mt-4 whitespace-pre-wrap">{aboutData.description}</p>

    <h3 className="text-lg font-semibold mt-6">🔧 Technologies Used:</h3>
    <ul className="list-disc pl-6 mt-2 text-gray-700">
      {aboutData.technologies.map((tech, i) => (
        <li key={i}>{tech}</li>
      ))}
    </ul>

    {aboutData.github && (
      <a
        href={aboutData.github}
        target="_blank"
        className="inline-block mt-6 text-blue-600 underline"
        rel="noreferrer"
      >
        View Source on GitHub
      </a>
    )}
  </div>
    <Footer />
  </>
);
export default About;