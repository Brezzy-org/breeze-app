import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, LogIn, UserPlus, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', path: '' },
    { name: 'About', path: '' },
    { name: 'Blog', path: '' },
    { name: 'Contact', path: '' }
  ];

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'bg-white shadow-md text-gray-800' 
          : 'bg-transparent text-white'
      }`}
    >
      <nav className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 transform transition-transform group-hover:rotate-6`}>
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className={`text-2xl font-bold ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Breeze
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {/* Nav Links */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                      scrolled ? 'text-gray-600' : 'text-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/register">
                  <button className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </button>
                </Link>
                <Link to="/therapist-register">
                  <button className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Join as Therapist
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-100/20 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                to="/register"
                className="block w-full px-4 py-2 text-center rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/therapist-register"
                className="block w-full px-4 py-2 text-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Join as Therapist
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;