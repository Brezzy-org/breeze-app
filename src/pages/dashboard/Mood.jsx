import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaSmile } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { apiAddMood } from '../../services/product'; 

const MoodTracker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [moods, setMoods] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveMood = async () => {
    const userId = localStorage.getItem('userID');
    console.log("Retrieved userId:", userId); 
  
    if (!userId) {
      console.error("User ID is missing. Redirecting to login.");
      navigate('/login');
      return;
    }
  
    const moodType = document.getElementById('moodType').value;
    const moodLevel = parseInt(document.getElementById('moodLevel').value, 10).toString();
    const energyLevel = parseInt(document.getElementById('energyLevel').value, 10).toString();
    const stressLevel = parseInt(document.getElementById('stressLevel').value, 10).toString();
    const sleepQuality = document.getElementById('sleepQuality').value;
    const description = document.getElementById('description').value;
  
    const newMood = {
      userId,  
      moodType,
      moodLevel,
      energyLevel,
      stressLevel,
      sleepQuality,
      description,
    };
  
    console.log("Payload being sent:", newMood); 
  
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found, redirecting to login");
      navigate('/login');
      return;
    }
  
    try {
      await apiAddMood(newMood); // Call your API function
  
      // Update local state with mood data
      setMoods([...moods, { date: selectedDate.toLocaleDateString(), ...newMood }]);
      closeModal();
  
      Swal.fire({
        icon: 'success',
        title: 'Mood Saved!',
        text: 'Your mood has been logged successfully.',
        confirmButtonText: 'Okay',
      });
    } catch (error) {
      console.error("Error saving mood:", error.response ? error.response.data : error.message);
  
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to save your mood. Please try again.',
        confirmButtonText: 'Try Again',
      });
    }
  };

  const tileContent = ({ date, view }) => {
    const mood = moods.find(m => m.date === date.toISOString().split('T')[0]);
    return view === 'month' && mood ? <span>🌞</span> : null;
  };

  return (
    <div className="flex flex-col items-center mt-8 space-y-6">
      <button
        onClick={openModal}
        className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg text-lg font-semibold hover:bg-blue-600 transition"
      >
        What is your mood today?
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-11/12 max-w-md p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center">
              <FaSmile className="mr-2 text-yellow-500" /> Log Your Mood
            </h2>

            <div className="space-y-4">
              <input type="text" id="moodType" placeholder="Mood Type" className="w-full p-3 rounded bg-gray-100" />
              <input type="number" id="moodLevel" placeholder="Mood Level (1-10)" className="w-full p-3 rounded bg-gray-100" />
              <input type="number" id="energyLevel" placeholder="Energy Level (1-10)" className="w-full p-3 rounded bg-gray-100" />
              <input type="number" id="stressLevel" placeholder="Stress Level (1-10)" className="w-full p-3 rounded bg-gray-100" />
              <input type="number" id="sleepQuality" placeholder="Sleep Quality (1-10)" className="w-full p-3 rounded bg-gray-100" />
              <textarea id="description" placeholder="Description" className="w-full p-3 rounded bg-gray-100"></textarea>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button onClick={closeModal} className="px-4 py-2 bg-gray-400 text-white rounded-lg">Cancel</button>
              <button onClick={handleSaveMood} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Save Mood</button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 w-full max-w-3xl">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Mood Calendar</h2>
        <Calendar
          value={selectedDate}
          onClickDay={setSelectedDate}
          tileContent={tileContent}
        />
      </div>
    </div>
  );
};

export default MoodTracker;