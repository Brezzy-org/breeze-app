import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { apiClient } from '../services/config';
import SweetAlert from 'sweetalert2';

const Header = () => {
  const [user, setUser] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await apiClient.get('/users/me');
        setUser(response.data);
        setFormData({ name: response.data.name, email: response.data.email });
      } catch (error) {
        console.error('Failed to fetch user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

 

  return (
    <header className="w-full bg-blue-600 p-4 shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-bold">B</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Breeze</h1>
      </div>

      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="text-white hover:text-blue-700 transition">Home</a>
        <a href="#features" className="text-white hover:text-blue-700 transition">Features</a>
        <a href="#contact" className="text-white hover:text-blue-700 transition">Contact</a>
      </nav>

      <div className="relative flex items-center space-x-4">
        {user && (
          <>
            {user.profilePicture ? (
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={handleProfileClick}
              />
            ) : (
              <FaUserCircle
                className="text-3xl text-gray-600 cursor-pointer hover:text-blue-700 transition"
                
              />
            )}
            <span className="text-gray-800 font-semibold">{user.name}</span>


            {/* Profile Update Modal */}
            {modalVisible && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Update Profile</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-600">Name</label>
                      <input
                        type="text"
                        name="name"

                        className="bg-gray-100 border border-gray-300 rounded px-4 py-2 w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600">Email</label>
                      <input
                        type="email"
                        name="email"

                        className="bg-gray-100 border border-gray-300 rounded px-4 py-2 w-full"
                      />
                    </div>
                    <div className="flex justify-end space-x-2 mt-4">
                      <button
                        type="button"
                        onClick={() => setModalVisible(false)}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleSaveChanges}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
