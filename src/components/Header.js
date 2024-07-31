import React from 'react';
import { FaBars, FaGlobe, FaUserCircle } from 'react-icons/fa';


function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-black">Anywhere</a>
          <a href="#" className="text-gray-600 hover:text-black">Any week</a>
          <a href="#" className="text-gray-600 hover:text-black">Add guests</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <FaGlobe className="text-gray-600 hover:text-black" />
        <FaUserCircle className="text-gray-600 hover:text-black" />
        <FaBars className="text-gray-600 hover:text-black md:hidden" />
      </div>
    </header>
  );
}

export default Header;
