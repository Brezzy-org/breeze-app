import React from 'react';
import { Calendar, User } from 'lucide-react';

const BlogCard = ({ blog, onClick }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength).trim() + '...';
  };

  return (
    <div 
      onClick={() => onClick(blog)}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg  duration-300 cursor-pointer transform hover:scale-[1.02] transition-transform"
    >
      {blog.image && (
        <div className="relative h-48 w-full">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {truncateText(blog.title, 60)}
        </h3>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <User className="w-4 h-4 mr-1" />
          <span>{blog.therapistName}</span>
          <span className="mx-2">•</span>
          <Calendar className="w-4 h-4 mr-1" />
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>
        <p className="text-gray-600">
          {truncateText(blog.article, 120)}
        </p>
        <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
          Read More →
        </button>
      </div>
    </div>
  );
};
export default BlogCard;