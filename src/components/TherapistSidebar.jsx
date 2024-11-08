import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCalendarAlt, FaClipboardList, FaBrain, FaFileAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';

const TherapistSidebar = ({ isCollapsed, onToggle }) => {
  return (
    <div className={`h-screen bg-gradient-to-br from-blue-200 to-green-200 shadow-lg p-6 flex flex-col justify-between transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>

      {/* Logo and Collapse Button */}
      <div className="flex items-center justify-between mb-10">
        {!isCollapsed && <h1 className="text-3xl font-bold text-gray-800">Breeze</h1>}
        <button onClick={onToggle} className="text-gray-700 hover:text-blue-700 transition text-xl">
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-6">
        <Link to="/therapist-dashboard/profile" className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 transition">
          <FaUser className="text-2xl" />
          {!isCollapsed && <span className="text-lg font-medium">Profile</span>}
        </Link>
        <Link to="/therapist-dashboard" className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 transition">
          <FaHome className="text-2xl" />
          {!isCollapsed && <span className="text-lg font-medium">Dashboard</span>}
        </Link>
        <Link to="/therapist-dashboard/clients" className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 transition">
          <FaUser className="text-2xl" />
          {!isCollapsed && <span className="text-lg font-medium">Clients</span>}
        </Link>
        <Link to="/therapist-dashboard/calendar" className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 transition">
          <FaCalendarAlt className="text-2xl" />
          {!isCollapsed && <span className="text-lg font-medium">Calendar</span>}
        </Link>
        <Link to="/therapist-dashboard/resources" className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 transition">
          <FaClipboardList className="text-2xl" />
          {!isCollapsed && <span className="text-lg font-medium">Resources</span>}
        </Link>
        <Link to="/therapist-dashboard/assessments" className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 transition">
          <FaBrain className="text-2xl" />
          {!isCollapsed && <span className="text-lg font-medium">Assessments</span>}
        </Link>
        <Link to="/therapist-dashboard/reports" className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 transition">
          <FaFileAlt className="text-2xl" />
          {!isCollapsed && <span className="text-lg font-medium">Reports</span>}
        </Link>
        <Link to="/therapist-dashboard/settings" className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 transition">
          <FaCog className="text-2xl" />
          {!isCollapsed && <span className="text-lg font-medium">Settings</span>}
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="mt-10">
        <button className="flex items-center space-x-3 text-red-500 hover:text-red-700 transition">
          <FaSignOutAlt className="text-2xl" />
          {!isCollapsed && <span className="text-lg font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default TherapistSidebar;
