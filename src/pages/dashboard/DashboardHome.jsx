import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiClient } from '../../services/config';

const quotes = [
  "Every day may not be good, but there’s something good in every day.",
  "Believe you can and you’re halfway there.",
  "Your present circumstances don’t determine where you can go; they merely determine where you start.",
  "The only way to do great work is to love what you do.",
  "Happiness is not something ready-made. It comes from your own actions.",
  "It does not matter how slowly you go as long as you do not stop.",
  "You are never too old to set another goal or to dream a new dream.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "Act as if what you do makes a difference. It does.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "In the middle of every difficulty lies opportunity.",
  "The best way to predict the future is to create it.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "Opportunities don't happen. You create them.",
  "The way to get started is to quit talking and begin doing.",
  "You miss 100% of the shots you don’t take."
];

const DashboardHome = () => {
  const [name, setName] = useState('');
  const currentDay = new Date().getDate();
  const dailyQuote = quotes[currentDay % quotes.length];

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await apiClient.get('/users/me');
        console.log("User profile response:", response.data); 
        setName(response.data.name); 
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };
    

    fetchUserProfile();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-blue-50 fixed ">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-blue-600">
          Hello, {name || 'Guest'}! {'\u{1F31E}'}
        </h1>
        <p className="text-lg text-gray-600 mt-2">How are you feeling today?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-500">Daily Mood Check-In</h2>
          <p className="text-gray-500 mt-1">Track how you're feeling today with emojis!</p>
          <div className="flex space-x-4 mt-4">
          <button className="text-3xl hover:scale-110">{'\u{1F604}'}</button>
      <button className="text-3xl hover:scale-110">{'\u{1F60A}'}</button>
      <button className="text-3xl hover:scale-110">{'\u{1F610}'}</button> 
      <button className="text-3xl hover:scale-110">{'\u{2639}'}</button>
      <button className="text-3xl hover:scale-110">{'\u{1F621}'}</button> 
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-500">Daily Insight & Quote</h2>
          <p className="text-gray-500 mt-2 italic">{dailyQuote}</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-500">Mental Health Toolkit</h2>
          <p className="text-gray-500 mt-1">Access breathing exercises, meditation, and more</p>
          <div className="flex space-x-4 mt-4">
            <Link to="/breathing" className="text-blue-600 hover:underline">Breathing Exercises</Link>
            <Link to="/meditation" className="text-blue-600 hover:underline">Meditation</Link>
            <Link to="/journaling" className="text-blue-600 hover:underline">Journaling</Link>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-500">Need to Talk?</h2>
          <p className="text-gray-500 mt-1">Chat with Breeze for guidance and support</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
            Start Chatting
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
