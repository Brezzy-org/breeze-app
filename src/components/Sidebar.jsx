import React from 'react';
import { FaHome, FaCheckCircle, FaBrain, FaCalendarAlt, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ isCollapsed }) => {
  return (
    <div className="h-screen  w-64 bg-gradient-to-br from-blue-200 to-green-200 p-6 shadow-lg flex flex-col justify-between">
      <div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Breeze</h1>

      
        <nav className="flex flex-col space-y-6">
          <Link to="/dashboard" className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 transition">
            <FaHome className="text-2xl" />
            {!isCollapsed && <span className="text-lg font-medium">Home</span>}
          </Link>
          <Link to="/dashboard/mood" className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 transition">
            <FaCheckCircle className="text-2xl" />
            {!isCollapsed && <span className="text-lg font-medium">Mood Check-in</span>}
          </Link>
          <Link to="/dashboard/breathing" className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 transition">
            <FaBrain className="text-2xl" />
            {!isCollapsed && <span className="text-lg font-medium">Breathing Exercises</span>}
          </Link>
          <Link to="/dashboard/reminders" className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 transition">
            <FaCalendarAlt className="text-2xl" />
            {!isCollapsed && <span className="text-lg font-medium">Reminders</span>}
          </Link>
          <Link to="/dashboard/supportchat" className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 transition">
            <FaComments className="text-2xl" />
            {!isCollapsed && <span className="text-lg font-medium">Support Chat</span>}
          </Link>
        </nav>
      </div>

      <div>
        <button className="flex items-center space-x-3 text-red-500 hover:text-red-700 transition">
          <span className="text-lg font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
