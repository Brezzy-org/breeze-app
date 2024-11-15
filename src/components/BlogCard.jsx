import React from 'react';
import { formatDate } from 'date-fns'; 

const BlogCard = ({ blog, onClick }) => {
  const previewText = blog.preview || (blog.article ? blog.article.substring(0, 150) + '...' : 'No preview available.');

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title || 'Untitled'}</h3>
        <p className="text-sm text-gray-600 mb-4">
          By {blog.therapistName || 'Unknown'} • {formatDate(blog.createdAt) || 'Unknown Date'}
        </p>
        <p className="text-gray-700 line-clamp-3 mb-4">
          {previewText}
        </p>
        <button
          onClick={() => onClick(blog)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          aria-label={`Read more about ${blog.title}`}
        >
          Read More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;