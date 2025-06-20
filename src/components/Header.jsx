import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600"
        >Resume Builder</div>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-600">CreateNew</a>
          <a href="features" className="hover:text-blue-600">Features</a>
          <a href="resumes" className="hover:text-blue-600">Resumes</a>
          <a href="about" className="hover:text-blue-600">About</a>

        </nav>

      
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

   
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium bg-white">
          <a href="/" className="hover:text-blue-600">CreateNew</a>
          <a href="features" className="hover:text-blue-600">Features</a>
          <a href="resumes" className="hover:text-blue-600">Resumes</a>
          <a href="about" className="hover:text-blue-600">About</a>
        </div>
      )}
    </header>
  );
};

export default Header;
