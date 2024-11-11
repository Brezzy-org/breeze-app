import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { apiClient } from '../services/config';

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await apiClient.get('/therapist/me');
        setUser(response.data); 
      } catch (error) {
        console.error('Failed to fetch user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <header className="w-full bg-gradient-to-r from-blue-200 to-green-200 p-4 shadow-md flex items-center justify-between">
      
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-bold">B</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Breeze</h1>
      </div>

      
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="text-gray-700 hover:text-blue-700 transition">Home</a>
        <a href="#features" className="text-gray-700 hover:text-blue-700 transition">Features</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-700 transition">Contact</a>
      </nav>

      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        {user && (
          <>
            {user.profilePicture ? (
              <img
                src={user.profilePicture} 
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <FaUserCircle className="text-3xl text-gray-600 cursor-pointer hover:text-blue-700 transition" />
            )}
            <span className="text-gray-800 font-semibold">{user.name}</span>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;