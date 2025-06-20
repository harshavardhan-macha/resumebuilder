import feature from "./feature";
import Header from "./Header";
import Footer from "./Footer";
const Features = () => (
    <>
    <Header />
  <div className="grid md:grid-cols-2 gap-6">
    {feature.map((feature, idx) => (
      <div key={idx} className="p-4 border rounded-xl bg-white shadow-md">
        <h3 className="text-lg font-semibold">{feature.title}</h3>
        <p className="text-gray-600 mt-2">{feature.description}</p>
      </div>
    ))}
  </div>
    <Footer />
  </>
);
export default Features;