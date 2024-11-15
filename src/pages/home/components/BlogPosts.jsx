import React, { useState, useEffect } from 'react';
import { getAllBlogs } from '../../../services/product'; // Ensure this is needed or remove if not used
import BlogCard from '../../../components/BlogCard';
import Modal from '../../../components/Modal';
import Swal from 'sweetalert2';
import axios from 'axios';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch blogs using the API
  const fetchBlogs = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}/therapist/blogs`;
    console.log(`Fetching from URL: ${url}`);
    setLoading(true); 

    try {
      const response = await axios.get(url);
      console.log("Full Response:", response);
      console.log("Response Data:", response.data);

      if (response.data && Array.isArray(response.data.blogs)) { 
        console.log("Blogs found:", response.data.blogs);
        setBlogs(response.data.blogs); 
      } else {
        console.warn("No blogs found in response:", response.data);
        Swal.fire({
          icon: 'warning',
          title: 'No Blogs Found',
          text: 'There are no blogs available at the moment.',
          confirmButtonColor: '#3B82F6',
        });
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to load blogs. Please try again later.',
        confirmButtonColor: '#3B82F6',
      });
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchBlogs(); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Therapist Blogs</h1>
          <p className="text-xl text-gray-600">
            Discover insights and wisdom from our experienced therapists
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} onClick={setSelectedBlog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No blogs available at the moment.</p>
          </div>
        )}
      </div>

      {selectedBlog && (
        <Modal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}
    </div>
  );
};

export default App;