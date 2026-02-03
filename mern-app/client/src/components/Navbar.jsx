import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600">
          A2G-RAM
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-green-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-green-600 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/how-it-helps"
              className="hover:text-green-600 transition"
            >
              How it Helps
            </Link>
          </li>

          <li>
            <Link
              to="/manual"
              className="hover:text-green-600 transition"
            >
              Manual
            </Link>
          </li>

          <li>
            <Link
              to="/erp-calculator"
              className="hover:text-green-600 transition"
            >
              ERP Calculator
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-5 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
