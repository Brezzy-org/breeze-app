import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white  fixed w-full z-10 ">
      <nav className="container mx-auto flex items-center justify-between p-5">
        
        <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-bold">B</span>
        </div>
        <h1 className="text-2xl font-bold text-white">Breeze</h1>
        </div>

        
        <ul className="hidden md:flex space-x-8 text-lg font-light">
          <li><Link to="" className="hover:text-blue-200">Features</Link></li>
          <li><Link to="" className="hover:text-blue-200">About</Link></li>
          <li><Link to="" className="hover:text-blue-200">Blog</Link></li>
          <li><Link to="" className="hover:text-blue-200">Contact</Link></li>
        </ul>

        
        <div className="hidden md:flex">
          <Link to="/register">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition">
              Get Started
            </button>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 px-5 pt-2 pb-4 space-y-3">
          <Link to="/features" className="block text-lg hover:text-blue-200" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="" className="block text-lg hover:text-blue-200" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="" className="block text-lg hover:text-blue-200" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="" className="block text-lg hover:text-blue-200" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="">
            <button className="bg-white text-blue-600 w-full mt-3 py-2 rounded-full font-medium hover:bg-blue-100 transition" onClick={() => setIsOpen(false)}>
              Get Started
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
