import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import deepBreathing from '../../assets/videos/basicbreathing.mp4';
import boxBreathing from '../../assets/videos/boxbreathing.mp4';
import fourSevenEight from '../../assets/videos/478breathing.mp4';
import abdomenExpandContract from '../../assets/videos/bellybreathing.mp4';
import nostrilTrace from '../../assets/videos/alternatenose.mp4';
import resonantPulse from '../../assets/videos/resonantbreathing.mp4';
import lionsBreath from '../../assets/videos/lionsbreathe.mp4';
import breathRetention from '../../assets/videos/breatheretention.mp4';
import lipBreathing from "../../assets/videos/lipbreathing.mp4"

const exercises = [
  { level: 1, name: "Basic Deep Breathing", description: "Expand and contract your breath with a visual guide.", video: deepBreathing },
  { level: 2, name: "Box Breathing", description: "Inhale, hold, exhale, and hold again with a square outline.", video: boxBreathing },
  { level: 3, name: "4-7-8 Breathing", description: "Expand for 4 seconds, hold for 7, contract for 8.", video: fourSevenEight },
  { level: 4, name: "Abdominal Breathing", description: "Focus on expanding and contracting your abdomen.", video: abdomenExpandContract },
  { level: 5, name: "Alternate Nostril Breathing", description: "Trace the path from nostril to nostril with each breath.", video: nostrilTrace },
  { level: 6, name: "Resonant Breathing", description: "A steady pulse that matches a calm breathing pace.", video: resonantPulse },
  { level: 7, name: "Lion’s Breath", description: "A lion’s face expands with each breath.", video: lionsBreath },
  { level: 8, name: "Breath Retention", description: "Hold your breath and then exhale slowly.", video: breathRetention },
  { level: 9, name: "Pursed-Lip Breathing", description: "A breathing technique to slow down exhalation for calmness.", video: lipBreathing },

];

const Breathing = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const animationStyle = useSpring({
    loop: activeExercise !== null,
    to: { transform: activeExercise ? 'scale(1.5)' : 'scale(1)' },
    from: { transform: 'scale(1)' },
    config: { duration: 3000 }
  });

  const handleStartExercise = (exercise) => {
    setActiveExercise(exercise);
  };

  const handleCloseExercise = () => {
    setActiveExercise(null);
  };

  const renderVideo = (videoPath) => (
    <video controls width="100%" height="auto">
      <source src={videoPath} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Breathing Exercises</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <div
            key={exercise.level}
            className="p-4 bg-white border rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-100"
            onClick={() => handleStartExercise(exercise)}
          >
            <h2 className="text-lg font-semibold">{`Level ${exercise.level}: ${exercise.name}`}</h2>
            <p className="text-sm text-gray-600 mt-2">{exercise.description}</p>
          </div>
        ))}
      </div>

      {activeExercise && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4 max-w-lg w-full h-4/5 overflow-y-auto">
            <h2 className="text-xl font-semibold">{`Level ${activeExercise.level}: ${activeExercise.name}`}</h2>
            <p className="text-gray-600">{activeExercise.description}</p>
            {renderVideo(activeExercise.video)}
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={handleCloseExercise}
            >
              Close Exercise
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Breathing;
