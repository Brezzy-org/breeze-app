import React, { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineClose, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { apiCreateBlogPost, apiGetBlogsByTherapist, apiEditBlogPost, apiDeleteBlogPost } from '../../services/product';

const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [formData, setFormData] = useState({
    therapistName: '',
    title: '',
    article: '',
    image: null,
  });
  const navigate = useNavigate();

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setEditingBlogId(null);
    setFormData({ therapistName: '', title: '', article: '', image: null }); // Reset form data
  };

  const fetchBlogs = async () => {
    const therapistId = localStorage.getItem('therapistID');
    if (!therapistId) {
        console.error("Therapist ID is missing. Redirecting to login.");
        navigate('');
        return;
    }

    try {
        const blogs = await apiGetBlogsByTherapist(therapistId);
        if (blogs) {
            setBlogs(blogs);
        } else {
            console.error("No blogs returned from API.");
        }
    } catch (error) {
        console.error("Error fetching blogs:", error);
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Failed to fetch blogs. Please try again later.',
        });
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingBlogId) {
        await apiEditBlogPost(editingBlogId, formData);
        Swal.fire({
          icon: 'success',
          title: 'Blog Updated!',
          text: 'Your blog has been updated successfully.',
          confirmButtonText: 'Okay',
        });
      } else {
        await apiCreateBlogPost(formData);
        Swal.fire({
          icon: 'success',
          title: 'Blog Created!',
          text: 'Your blog has been posted successfully.',
          confirmButtonText: 'Okay',
        });
      }
      fetchBlogs();
      closeModal();
    } catch (error) {
      console.error("Error saving blog:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to create or update your blog. Please try again.',
        confirmButtonText: 'Try Again',
      });
    }
  };

  const handleEdit = (blog) => {
    setEditingBlogId(blog.id);
    setFormData({
      therapistName: blog.therapistName,
      title: blog.title,
      article: blog.article,
      image: null,
    });
    openModal();
  };

  const handleDelete = async (id) => {
    const confirmed = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirmed.isConfirmed) {
      try {
        await apiDeleteBlogPost(id);
        setBlogs((prev) => prev.filter(blog => blog.id !== id));
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your blog has been deleted successfully.',
        });
      } catch (error) {
        console.error("Error deleting blog:", error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to delete the blog. Please try again.',
        });
      }
    }
  };

  const BlogPost = ({ blog }) => {
    const [isExpanded, setIsExpanded] = useState(false); // State for Read More functionality

    return (
      <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          {blog.image && (
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                />
            )}
        <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
        <p className="text-gray-500">by {blog.therapistName} on {new Date(blog.createdAt).toLocaleDateString()}</p>
        <p className="text-gray-700">
          {isExpanded ? blog.article : `${blog.article.substring(0, 100)}... `}
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-blue-600 hover:text-blue-800 transition duration-150"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </p>
        <div className="flex justify-end mt-4 space-x-2">
          <button 
            onClick={() => handleEdit(blog)} 
            className="flex items-center text-blue-600 hover:text-blue-800 transition duration-150"
          >
            <AiOutlineEdit className="mr-1" />
            Edit
          </button>
          <button 
            onClick={() => handleDelete(blog.id)} 
            className="flex items-center text-red-600 hover:text-red-800 transition duration-150"
          >
            <AiOutlineDelete className="mr-1" />
            Delete
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Your Blogs</h2>
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center transition duration-150 hover:bg-blue-700"
        >
          <AiOutlinePlus className="mr-2" />
          Create Blog
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogPost key={blog.id} blog={blog} />)
        ) : (
          <p className="text-gray-600 col-span-full">No blogs found. Please create a blog.</p>
        )}
      </div>
      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">{editingBlogId ? "Edit Blog" : "Create New Blog"}</h3>
              <button onClick={closeModal}>
                <AiOutlineClose className="text-gray-600 hover:text-gray-800 transition duration-150" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Therapist Name</label>
                <input
                  type="text"
                  name="therapistName"
                  value={formData.therapistName}
                  onChange={(e) => setFormData({ ...formData, therapistName: e.target.value })}
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Article</label>
                <textarea
                  name="article"
                  value={formData.article}
                  onChange={(e) => setFormData({ ...formData, article: e.target.value })}
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="4"
                  required
                ></textarea>
              </div>
              {!editingBlogId && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                    className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    accept="image/*"
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-150"
              >
                {editingBlogId ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;