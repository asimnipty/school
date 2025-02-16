import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-2">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">SPPMWeb</h2>
            <p className="text-gray-400">© 2025 SPPMWeb. All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
            <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a className=" text-4xl text-red-300" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a className=" text-4xl text-red-300" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a className=" text-4xl text-red-300" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
