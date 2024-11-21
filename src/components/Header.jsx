import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-custom-color text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">AamhiUnique's Arena</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
