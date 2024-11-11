import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FaCommentDots } from 'react-icons/fa';

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(prevState => !prevState);
  };

  const toggleChatbot = () => {
    setIsChatbotVisible(prevState => !prevState);
  };

  return (
    <div className="dashboard flex h-screen overflow-hidden relative">
     
      <Sidebar isCollapsed={isCollapsed} className="fixed h-full" />

      {/* Main Content Area */}
      <div className={`main-content flex-1 ml-${isCollapsed ? '16' : '64'}`}>

        <div className="relative">
          <Header onToggle={toggleSidebar} className="fixed top-0 left-0 w-full z-10" />
        </div>

      
        <div className="mt-16 overflow-y-auto h-full p-4">
          <Outlet />
        </div>
      </div>

      {/* Fixed Chatbot */}
      {isChatbotVisible && (
        <div className="chatbot fixed bottom-20 right-5 w-72 h-96 border border-gray-300 rounded-lg shadow-lg bg-white z-50 p-4">
          <div className="chat-header font-bold">Chatbot</div>
          <div className="chat-content flex-1 overflow-y-auto my-2"></div>
          <input
            type="text"
            placeholder="Type a message..."
            className="border border-gray-300 rounded-md w-full p-2"
          />
          <button className="bg-blue-500 text-white rounded-md mt-2 w-full p-2">Send</button>
        </div>
      )}

      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={toggleChatbot}
          className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-600 hover:shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          <h1 className="mr-3">Breeze bot</h1>
          <FaCommentDots className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default DashboardLayout;
