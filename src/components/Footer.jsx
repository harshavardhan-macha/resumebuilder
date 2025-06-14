const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-8 pb-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600">ResumeGenie</h2>
            <p className="mt-2 text-sm">
              Build your professional resume for free with AI suggestions and modern templates.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-blue-600">Features</a></li>
              <li><a href="#templates" className="hover:text-blue-600">Templates</a></li>
              <li><a href="#about" className="hover:text-blue-600">About</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
            <p className="text-sm mb-2">resumegenie@email.com</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-600">Twitter</a>
              <a href="#" className="hover:text-blue-600">LinkedIn</a>
              <a href="#" className="hover:text-blue-600">GitHub</a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ResumeGenie. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
