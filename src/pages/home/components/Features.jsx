import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa";
// Import images for each feature
import moodImage from "../../../assets/images/hero.png";
import breathingImage from "../../../assets/images/breathe.jpg";
import mindfulnessImage from "../../../assets/images/reminders.png";
import supportChatImage from "../../../assets/images/chat.png";

const features = [
    {
        title: 'Mood Tracking',
        description: 'Track your daily mood and reflect on your mental well-being.',
        image: moodImage,
    },
    {
        title: 'Breathing Exercises',
        description: 'Practice guided breathing exercises for stress relief.',
        image: breathingImage,
    },
    {
        title: 'Mindfulness Reminders',
        description: 'Get reminders to stay mindful and present throughout your day.',
        image: mindfulnessImage,
    },
    {
        title: 'Support Chat',
        description: 'Reach out to Breeze for support and guidance anytime.',
        image: supportChatImage,
    },
];

const Features = () => {
    return (
        <div className="p-6 bg-blue-50">
            <h2 className="text-3xl font-semibold text-center text-blue-600 mb-12">
                Explore Breeze Features
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="mb-4">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-60 h-60 object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-600">{feature.title}</h3>
                        <p className="text-gray-600 mt-2 text-center">{feature.description}</p>
                        <button className="flex items-center gap-3 bg-blue-600 text-white px-4 py-2 rounded-md mt-3">
                            <span>View more</span>
                            <FaArrowRight className="inline-block align-middle" />
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Features;
