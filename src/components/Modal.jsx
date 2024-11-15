import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { formatDate } from 'date-fns';

const Modal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
              <p className="text-sm text-gray-600 mt-1">
                By {blog.therapistName} • {formatDate(blog.createdAt)}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <AiOutlineClose className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="overflow-y-auto prose max-w-none">
            {blog.article}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;