import React from 'react';
import CountUp from 'react-countup';
import image from "../../assets/images/pic.jpg";
import pic from "../../assets/images/pic1.jpg";

const AboutUs = () => {
  return (
    <div className="relative bg-cover bg-about bg-center min-h-screen  flex items-center justify-center mt-10">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto p-8 mt-7 mb-7 bg-white bg-opacity-90 rounded-lg shadow-lg grid gap-8 md:grid-cols-2">
        {/* Left Section - Images Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Image 1 */}
          <div className="bg-transparent p-4 rounded-lg col-span-2">
            <img src={image} alt="Product" className="rounded-lg w-full" />
          </div>

          {/* Image 2 */}
          <div className="bg-transparent p-4 rounded-lg">
            <img src={pic} alt="Product" className="rounded-lg w-full" />
          </div>

          {/* Ratings Section */}
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center text-center">
            <p className="text-gray-700">Best ratings:</p>
            <div className="flex space-x-2 mt-2">
              <span role="img" aria-label="rating">😊</span>
              <span role="img" aria-label="rating">😍</span>
              <span role="img" aria-label="rating">😁</span>
              <span role="img" aria-label="rating">😄</span>
            </div>
          </div>
        </div>

        {/* Right Section - Text and Stats */}
        <div className="flex flex-col justify-between space-y-4">
          {/* Sales & Ratings */}
          <div className="bg-gray-100 p-4 rounded-lg text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">
              <CountUp end={30000} duration={2.5} separator="," />+
            </h3>
            <p className="text-sm text-gray-600">Connections to therapists around the globe.</p>
          </div>

          {/* About Us Text */}
          <div className="text-gray-800">
            <h2 className="text-lg font-bold text-blue-600 mb-2">A BIT</h2>
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="mb-6">
              Breeze is a mental wellness app designed to make mental health support accessible and compassionate. With features like daily mood check-ins, guided breathing, a supportive chatbot, and a mental health toolkit, Breeze empowers users to manage stress, enhance mood, and improve well-being. Our team is dedicated to creating a safe, intuitive experience, helping users build resilience and embrace healthier, balanced lives—one Breeze at a time.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-600">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
