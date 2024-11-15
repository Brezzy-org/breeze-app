import React, { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { Smile, Meh, Frown, Sun, Moon, Battery, Activity, X } from 'lucide-react';
import Swal from 'sweetalert2';

const MOOD_TYPES = [
  { icon: Smile, label: 'Happy', color: 'text-green-500', value: 'happy' },
  { icon: Meh, label: 'Neutral', color: 'text-yellow-500', value: 'neutral' },
  { icon: Frown, label: 'Sad', color: 'text-blue-500', value: 'sad' }
];

const LEVELS = [1, 2, 3, 4, 5];

function MoodTracker() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [moods, setMoods] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    moodType: '',
    energyLevel: 3,
    stressLevel: 3,
    sleepQuality: 3,
    description: ''
  });

  const userId = localStorage.getItem('userID'); // Get current user's ID

  useEffect(() => {
    if (userId) {
      const savedMoods = localStorage.getItem(`moods_${userId}`);
      if (savedMoods) {
        setMoods(JSON.parse(savedMoods));
      }
    }
  }, [userId]);

  const handleSaveMood = async (e) => {
    e.preventDefault();
    
    if (!userId) {
      Swal.fire({
        icon: 'error',
        title: 'Not Logged In',
        text: 'Please log in to track your moods',
        confirmButtonColor: '#3B82F6'
      });
      return;
    }

    if (!formData.moodType) {
      Swal.fire({
        icon: 'warning',
        title: 'Mood Required',
        text: 'Please select your mood before saving',
        confirmButtonColor: '#3B82F6'
      });
      return;
    }

    const newMood = {
      ...formData,
      date: selectedDate.toISOString(),
      id: Date.now(),
      userId
    };

    try {
      // Save to localStorage with user-specific key
      const updatedMoods = [...moods, newMood];
      setMoods(updatedMoods);
      localStorage.setItem(`moods_${userId}`, JSON.stringify(updatedMoods));
      
      setIsModalOpen(false);
      setFormData({
        moodType: '',
        energyLevel: 3,
        stressLevel: 3,
        sleepQuality: 3,
        description: ''
      });

      Swal.fire({
        icon: 'success',
        title: 'Mood Saved!',
        text: 'Your mood has been tracked successfully',
        confirmButtonColor: '#3B82F6',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to save your mood. Please try again.',
        confirmButtonColor: '#3B82F6'
      });
    }
  };

  const getDaysInMonth = () => {
    return eachDayOfInterval({
      start: startOfMonth(currentMonth),
      end: endOfMonth(currentMonth)
    });
  };

  const getMoodForDay = (date) => {
    return moods.find(mood => 
      mood.userId === userId && 
      isSameDay(new Date(mood.date), date)
    );
  };

  const getMoodEmoji = (moodType) => {
    switch (moodType) {
      case 'happy': return '😊';
      case 'neutral': return '😐';
      case 'sad': return '😔';
      default: return '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Mood Tracker</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-lg"
        >
          Track Today's Mood
        </button>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {format(currentMonth, 'MMMM yyyy')}
          </h2>
          <div className="space-x-2">
            <button
              onClick={() => setCurrentMonth(date => new Date(date.getFullYear(), date.getMonth() - 1))}
              className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentMonth(date => new Date(date.getFullYear(), date.getMonth() + 1))}
              className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
          {getDaysInMonth().map(date => {
            const mood = getMoodForDay(date);
            return (
              <div
                key={date.toISOString()}
                className={`aspect-square p-2 rounded-lg border ${
                  isSameDay(date, new Date()) ? 'border-blue-500' : 'border-gray-200'
                } hover:border-blue-300 cursor-pointer transition-colors`}
                onClick={() => {
                  setSelectedDate(date);
                  setIsModalOpen(true);
                }}
              >
                <div className="text-sm text-gray-600">{format(date, 'd')}</div>
                {mood && (
                  <div className="text-2xl mt-1">
                    {getMoodEmoji(mood.moodType)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl p-6 w-full max-w-md my-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">
                How are you feeling on {format(selectedDate, 'MMMM d, yyyy')}?
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSaveMood} className="space-y-6">
              {/* Mood Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select your mood
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {MOOD_TYPES.map(({ icon: Icon, label, color, value }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setFormData({ ...formData, moodType: value })}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.moodType === value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <Icon className={`w-8 h-8 mx-auto ${color}`} />
                      <span className="block text-sm mt-2">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Levels */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center">
                      <Battery className="w-5 h-5 mr-2" />
                      Energy Level
                    </div>
                  </label>
                  <div className="flex justify-between">
                    {LEVELS.map(level => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setFormData({ ...formData, energyLevel: level })}
                        className={`w-12 h-12 rounded-full ${
                          formData.energyLevel === level
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center">
                      <Activity className="w-5 h-5 mr-2" />
                      Stress Level
                    </div>
                  </label>
                  <div className="flex justify-between">
                    {LEVELS.map(level => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setFormData({ ...formData, stressLevel: level })}
                        className={`w-12 h-12 rounded-full ${
                          formData.stressLevel === level
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center">
                      <Moon className="w-5 h-5 mr-2" />
                      Sleep Quality
                    </div>
                  </label>
                  <div className="flex justify-between">
                    {LEVELS.map(level => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setFormData({ ...formData, sleepQuality: level })}
                        className={`w-12 h-12 rounded-full ${
                          formData.sleepQuality === level
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes (optional)
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  rows="3"
                  placeholder="How are you feeling today?"
                ></textarea>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Save Mood
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoodTracker;