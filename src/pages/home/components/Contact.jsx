import { LocateIcon, Mail, MapPin, PhoneIcon } from 'lucide-react';
import React from 'react';
import { MdEmail } from 'react-icons/md';

const ContactForm = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background that covers half of the main div */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-600 to-blue-700"></div>

      {/* Centered Heading and Description */}
      <div className="relative text-center mb-12 max-w-2xl">
        <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
        <p className="text-white mt-2">
        Have questions or feedback? We’re here to support you on your wellness journey. Reach out, and let’s grow together.
        </p>
      </div>

      {/* Main Contact Form Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information Section */}
        <div className="bg-blue-600 text-white rounded-3xl p-4 w-full">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <p className="text-sm mt-2"> Drop us a message, and let’s start building a healthier, happier you.</p>
          <ul className="mt-4 space-y-4 text-sm">
            <li className='flex gap-2'><span className="font-medium"><PhoneIcon/></span> +233545104263, +233598043169</li>
            <li  className='flex gap-2'><span className="font-medium"><Mail/></span> breezesupport@gmail.com</li>
            <li  className='flex gap-2'><span className="font-medium"><MapPin/></span> Accra, Ghana</li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="md:col-span-2">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                className="w-full border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-blue-600 py-2 px-1 rounded-md"
                placeholder="John Trangely"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
              <input
                type="email"
                className="w-full border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-blue-600 py-2 px-1 rounded-md"
                placeholder="hello@nuren.com"
              />
            </div>

            {/* Subject Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Subject</label>
              <input
                type="text"
                className="w-full border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-blue-600 py-2 px-1 rounded-md"
                placeholder="I want to hire you quickly"
              />
            </div>

            {/* Message Field */}
            <div className="relative sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                className="w-full border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-blue-600 py-2 px-1 resize-none rounded-md"
                rows="4"
                placeholder="Write here your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-[10vw] py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
