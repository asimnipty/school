import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 shadow-lg sticky">
      <div className="container text-yellow-500 font-bold mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img className=" rounded-full size-[80px] shadow-amber-500 shadow-lg" src={logo} alt="" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className=" font-bold  hover:text-gray-200">Home</Link>
          <Link to="/about" className=" hover:text-gray-200">About</Link>
          <Link to="/contact" className=" hover:text-gray-200">Contact</Link>
          <Link to="/gallary" className=" hover:text-gray-200">Gallary</Link>
          
        </div>

        {/* Login & Register Buttons */}
        <div className="hidden md:flex space-x-4">
          {/* <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100">
            Login
          </Link> */}
          <Link to="/register" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-indigo-300 font-bold text-red-400 rounded-md text-center space-y-3 p-4">
          <Link to="/" className="block texxt-bold hover:text-gray-200">Home</Link>
          <Link to="/about" className="block hover:text-gray-200">About</Link>
          <Link to="/contact" className="block hover:text-gray-200">Contact</Link>
          <Link to="/gallary" className="block hover:text-gray-200">Gallary</Link>
          <hr className="border-gray-400" />
          {/* <Link to="/login" className="block bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100">
            Login
          </Link> */}
          <Link to="/register" className="block bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
