import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { apiClient } from '../services/config';
import { Sparkles } from 'lucide-react';

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
    <header className="w-full  bg-gradient-to-r from-blue-600 to-blue-700 p-4 shadow-md flex items-center justify-between">
      
      <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Breeze</span>
            </div>

      
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="text-white hover:text-blue-700 transition">Home</a>
        <a href="#features" className="text-white hover:text-blue-700 transition">Features</a>
        <a href="#contact" className="text-white hover:text-blue-700 transition">Contact</a>
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
              <FaUserCircle className="text-3xl text-white cursor-pointer hover:text-blue-700 transition" />
            )}
            <span className="text-white font-semibold">{user.name}</span>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
