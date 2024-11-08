import React, { useState } from 'react';
import { FaHome, FaCheckCircle, FaBrain, FaCalendarAlt, FaComments, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import { IoMdLogOut } from "react-icons/io";
const Sidebar = ({ isCollapsed }) => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out of Breeze.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        navigate('/login');
        Swal.fire('Logged Out', 'You have been successfully logged out.', 'success');
      }
    });
  };

  const handleProfileClick = () => {
    setModalVisible(true);
  };

  const handleSaveChanges = async () => {
    try {
      // API call to update profile
      // Replace `apiClient.put('/users/me', formData)` with your actual API endpoint
      await apiClient.put('/users/me', formData);
      setModalVisible(false);
      Swal.fire('Profile Updated', 'Your profile has been updated successfully.', 'success');
    } catch (error) {
      Swal.fire('Error', 'Failed to update profile. Please try again.', 'error');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="h-screen w-64 bg-blue-600  p-6 shadow-lg flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white mb-8">Breeze</h1>
        <nav className="flex flex-col space-y-6">
          <Link to="/dashboard" className="flex items-center space-x-3 text-white hover:text-blue-700 transition">
            <FaHome className="text-2xl" />
            {!isCollapsed && <span className="text-lg font-medium">Home</span>}
          </Link>
          <Link to="/dashboard/mood" className="flex items-center space-x-3  text-white hover:text-blue-700 transition">
            <FaCheckCircle className="text-2xl" />
            {!isCollapsed && <span className="text-lg font-medium">Mood Check-in</span>}
          </Link>
          <Link to="/dashboard/breathing" className="flex items-center space-x-3  text-white hover:text-blue-700 transition">
            <FaBrain className="text-2xl" />
            {!isCollapsed && <span className="text-lg font-medium">Breathing Exercises</span>}
          </Link>
          <Link to="/dashboard/reminders" className="flex items-center space-x-3  text-white hover:text-blue-700 transition">
            <FaCalendarAlt className="text-2xl" />
            {!isCollapsed && <span className="text-lg font-medium">Reminders</span>}
          </Link>
          <Link to="/dashboard/supportchat" className="flex items-center space-x-3  text-white hover:text-blue-700 transition">
            <FaComments className="text-2xl" />
            {!isCollapsed && <span className="text-lg font-medium">Support Chat</span>}
          </Link>
          <Link to="/dashboard/user-profile" className="flex items-center space-x-3  text-white hover:text-blue-700 transition">
            <FaUser className="text-2xl" />
            {!isCollapsed && <span className="text-lg font-medium">User Profile</span>}
          </Link>
         
        </nav>
      </div>

      <div>
        <button onClick={handleLogout} className="flex items-center space-x-3 text-red-700 hover:text-red-700 transition">
        <IoMdLogOut className='text-2xl'/>
          <span className="text-lg font-medium">Logout</span>
        </button>
      </div>

      {/* Profile Update Modal */}
      {modalVisible && (
        <Modal
          isOpen={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Update Profile</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-100 border border-gray-300 rounded px-4 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
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
        </Modal>
      )}
    </div>
  );
};

export default Sidebar;
