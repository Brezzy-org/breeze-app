import React, { useState } from 'react';

const Mood = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  //  moods with emojis, colors, and labels
  const moods = [
    { emoji: '\u{1F604}', color: 'bg-gradient-to-r from-yellow-400 to-orange-500', label: 'Happy' },
    { emoji: '\u{1F60A}', color: 'bg-gradient-to-r from-pink-400 to-red-500', label: 'Content' },
    { emoji: '\u{1F610}', color: 'bg-gradient-to-r from-gray-300 to-gray-500', label: 'Neutral' },
    { emoji: '\u{2639}', color: 'bg-gradient-to-r from-blue-400 to-indigo-500', label: 'Sad' },
    { emoji: '\u{1F621}', color: 'bg-gradient-to-r from-red-400 to-red-700', label: 'Angry' }

  ];


  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div className="flex flex-col items-center mt-8 space-y-6 ">
      <h1 className="text-2xl font-semibold text-blue-600">How are you feeling today?</h1>


      <div className="grid grid-cols-5 gap-6">
        {moods.map((mood, index) => (
          <button
            key={index}
            onClick={() => handleMoodSelect(mood)}
            className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer ${mood.color} ${selectedMood === mood ? 'border-4 border-white' : ''
              }`}
          >
            <span className="text-5xl">{mood.emoji}</span>
            <p className="text-white font-medium mt-2">{mood.label}</p>
          </button>
        ))}
      </div>


      {selectedMood && (
        <div className="mt-8 text-center">
          <h2 className="text-xl text-blue-600 font-semibold">You’re feeling:</h2>
          <span className="text-6xl">{selectedMood.emoji}</span>
          <p className="text-lg font-medium text-gray-700 mt-2">{selectedMood.label}</p>
        </div>
      )}
    </div>
  );
};

export default Mood;
