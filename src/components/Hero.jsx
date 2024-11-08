import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots } from 'react-icons/fa';

// Import your images
import hero1 from "../assets/images/image.png";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";
import hero5 from "../assets/images/hero5.jpg";
import hero6 from "../assets/images/hero6.jpg";

// Array of images and quotes for Breeze
const images = [hero1, hero2, hero3, hero4, hero5, hero6];
const quotes = [
  "Take a deep breath and find your calm.",
  "Every day is a new opportunity for growth.",
  "Peace begins with a single, mindful breath.",
  "You are not alone; we're here for you.",
  "Find strength in your quiet moments.",
  "Today, choose to nurture yourself.",
  "It's okay to take things one step at a time.",
  "Your mind deserves just as much love as your heart.",
  "Every emotion is valid; embrace them all.",
  "Remember to find joy in small moments.",
  "You are stronger than you think.",
  "Allow yourself the grace of imperfection.",
  "Let go of the things you can’t control.",
  "Balance is a journey, not a destination.",
  "Self-care is not a luxury; it's a necessity.",
  "Your story matters; be kind to yourself.",
  "Progress is progress, no matter how small.",
  "Sometimes, rest is the most productive thing.",
  "Breathe, and let go of what’s weighing you down.",
  "Choose peace over perfection."
];

const Hero = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  // Cycle through quotes and images
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, []);

  const handleChatClick = () => {
    alert("Chatbot feature coming soon!");
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen text-white pt-[60px]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Background image slider */}
      <AnimatePresence>
        <motion.div
          key={imageIndex} // Unique key for each image
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }} // Smooth fade transition
        >
          <img
            src={images[imageIndex]}
            alt="Calm and wellness"
            className="w-full h-full object-cover transform scale-110 transition-transform duration-[15000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-transparent to-blue-900 opacity-70"></div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center text-center p-4">
        <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white max-w-4xl leading-tight transition-opacity duration-1000 transform scale-100">
          “{quotes[quoteIndex]}”
        </p>
      </div>

      {/* Chatbot */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={handleChatClick}
          className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-600 hover:shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          <h1 className="mr-3">Breeze bot</h1>
          <FaCommentDots className="text-3xl" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-blue-600 animate-bounce flex items-center space-x-2">
        <button className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-600 hover:shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"> <span className="text-3xl lg:text-4xl">&#x2193;</span>
          <span className="text-lg lg:text-xl font-semibold">Scroll Down</span></button>
      </div>

    </section>

  );
};

export default Hero;
