import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional icons for hamburger

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-lg sticky top-0 z-50 rounded-b-2xl transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-800 hover:text-blue-600 transition duration-300">
            <Link to="/">OpenDesk</Link>
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/write"
            className="text-gray-700 font-medium hover:text-blue-800 transition duration-300 hover:underline"
          >
            Write
          </Link>
          <Link
            to="/services"
            className="text-gray-700 font-medium hover:text-blue-800 transition duration-300 hover:underline"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 font-medium hover:text-blue-800 transition duration-300 hover:underline"
          >
            Contact
          </Link>

          <Link
            to="/signup"
            className="ml-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-blue-400 transition transform duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-800 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg rounded-b-2xl">
          <Link
            to="/write"
            className="block px-6 py-4 text-gray-700 font-medium hover:text-blue-800 transition duration-300 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Write
          </Link>
          <Link
            to="/services"
            className="block px-6 py-4 text-gray-700 font-medium hover:text-blue-800 transition duration-300 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-6 py-4 text-gray-700 font-medium hover:text-blue-800 transition duration-300 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/signup"
            className="block px-6 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-xl mx-4 my-2 text-center shadow-lg hover:scale-105 hover:from-blue-600 hover:to-blue-400 transition transform duration-300"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header;

