import Header from "./components/Header";
import Footer from "./components/Footer";
import ResumeBuilder from "./components/ResumeBuilder";
const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
           <main className="flex-grow ">
            <ResumeBuilder/></main> 
            <Footer/>
        </div>
    );
};

export default Home;