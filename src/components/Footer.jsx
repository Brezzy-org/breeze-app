import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Send, Sparkles, Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' }
  ];

  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Support: ['Help Center', 'Safety Center', 'Community Guidelines', 'Contact Us'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'],
    Features: ['Therapy Sessions', 'Mental Health Tools', 'Meditation', 'Resources']
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Breeze</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-sm">
              Empowering mental wellness through accessible, compassionate support and innovative digital solutions.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-3" />
                <span>breezesupport@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-3" />
                <span>+233 (545) 104-263</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-8">
              {/* Company Links */}
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.Company.map((link) => (
                    <li key={link}>
                      <Link
                        to="#"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.Support.map((link) => (
                    <li key={link}>
                      <Link
                        to="#"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.Legal.map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Links */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Features</h3>
            <ul className="space-y-3">
              {footerLinks.Features.map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section (placed at the bottom) */}
        <div className="-mt-10">
          <div className="flex flex-col items-center">
            <h3 className="text-gray-900 font-semibold mb-2">Stay up to date</h3>
            <p className="text-gray-600 mb-4 text-center">
              Subscribe to our newsletter for mental wellness tips and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-gray-600">
              <span>© {currentYear} Breeze. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" />
              <span>for better mental health.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
