import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center ">
        {/* Logo */}
        <div className="mb-4 md:mb-0 ">
          <h2 className="text-2xl font-bold">Posterz</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-xl hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="#" className="text-xl hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="#" className="text-xl hover:text-blue-400">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 opacity-75">
        &copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
