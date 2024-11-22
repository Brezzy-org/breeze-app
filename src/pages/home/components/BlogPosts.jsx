import React, { useState, useEffect } from 'react';
import { ThumbsUp, MessageCircle, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchDate, setSearchDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [likes, setLikes] = useState({});
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://breeze-api-e791.onrender.com/blogs');
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleLike = (blogId) => {
    setLikes((prev) => ({
      ...prev,
      [blogId]: (prev[blogId] || 0) + 1,
    }));
  };

  const filteredBlogs = blogs.filter((blog) => {
    if (!searchDate) return true;
    const blogDate = new Date(blog.createdAt).toISOString().split('T')[0];
    return blogDate === searchDate;
  });

  const blogsPerPage = 4;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Featured Blogs From our Therapists</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            {searchDate && (
              <button
                onClick={() => setSearchDate('')}
                className="text-blue-600 hover:text-blue-800"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentBlogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
                  <img src={`https://savefiles.org/${blog.image}?shareable_link=522`} alt={blog.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{blog.title}</h2>
                    <p className="text-gray-600 text-sm mb-2">By {blog.author.name}</p>
                    <p className="text-gray-500 text-xs mb-2">
                      {new Date(blog.createdAt).toLocaleDateString()} {/* Displaying the date */}
                    </p>
                    <p className={expandedBlogId === blog.id ? "mb-4" : "mb-4"}>{blog.article}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        <button onClick={() => handleLike(blog.id)} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
                          <ThumbsUp className="w-5 h-5" />
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
                          <MessageCircle className="w-5 h-5" />
                        </button>
                      </div>
                      <button onClick={() => setExpandedBlogId(expandedBlogId === blog.id ? null : blog.id)} className="text-blue-600 hover:text-blue-800 transition duration-150">
                        {expandedBlogId === blog.id ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {filteredBlogs.length > blogsPerPage && (
              <div className="flex justify-center items-center space-x-4 mt-8">
                <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="text-gray-600">Page {currentPage} of {Math.ceil(filteredBlogs.length / blogsPerPage)}</span>
                <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredBlogs.length / blogsPerPage)))} disabled={currentPage === Math.ceil(filteredBlogs.length / blogsPerPage)} className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;