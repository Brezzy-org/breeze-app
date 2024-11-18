import React from 'react';
import { X, Calendar, User } from 'lucide-react';


const Modal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">Blog Post</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <User className="w-5 h-5 mr-2" />
            <span className="font-medium">{blog.therapistName}</span>
            <span className="mx-2">•</span>
            <Calendar className="w-5 h-5 mr-2" />
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {blog.article}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal