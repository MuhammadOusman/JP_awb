import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ text, handleProfileClick }) => {
  return (
    <nav className="w-full h-16 bg-gradient-to-r from-purple-700 to-indigo-800 text-white flex justify-between items-center px-8 shadow-lg">
      <div className="text-2xl font-extrabold tracking-wide">MyApp</div>
      <div className="flex gap-6 items-center">
        <Link to="/home" className="text-white text-lg font-medium hover:text-purple-200 transition-colors duration-300">
          Home
        </Link>
        <button
          onClick={handleProfileClick}
          className="px-5 py-2 bg-purple-500 hover:bg-purple-600 rounded-full text-white text-lg font-semibold shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          {text}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
