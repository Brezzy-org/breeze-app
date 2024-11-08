import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FaCommentDots } from 'react-icons/fa';
import TherapistSidebar from '../components/TherapistSidebar';
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
    <div className="dashboard flex relative">
      <Sidebar isCollapsed={isCollapsed} />
      <div className="main-content flex-1">
        <Header onToggle={toggleSidebar} />
        <Outlet /> {/* This will render the child routes */}
      </div>
      


      {/* Fixed Chatbot */}
      {isChatbotVisible && (
        <div className="chatbot fixed bottom-20 right-5 w-72 h-96 border border-gray-300 rounded-lg shadow-lg bg-white z-50 p-4">
          <div className="chat-header font-bold">Chatbot</div>
          <div className="chat-content flex-1 overflow-y-auto my-2">

          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="border border-gray-300 rounded-md w-full p-2"
          />
          <button className="bg-blue-500 text-white rounded-md mt-2 w-full p-2">Send</button>
        </div>
      )}

      <div className="fixed bottom-8 right-8">
        <button
          onClick={toggleChatbot}
          className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-600 hover:shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
        > <h1 className='mr-3'>Breeze bot</h1>
          <FaCommentDots className="text-3xl" />
          {isChatbotVisible ? '' : ''}
        </button>
      </div>
    </div>



  );
};





export default DashboardLayout;
