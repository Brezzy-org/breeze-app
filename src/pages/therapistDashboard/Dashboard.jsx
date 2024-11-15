import React from 'react';
import Calendar from "./Calender.jsx"
import CalendlyPopup from '../../components/CalendlyPopUp.jsx';


const Dashboard = () => {
  // Sample data (in real app, these would come from your state or API)
 
  const clients = [
    { name: 'John Doe', nextSession: '10/25/2024' },
    { name: 'Jane Smith', nextSession: '10/26/2024' }
  ];
  const blogs = [
    { title: 'Mental Health Tips', likes: 20, comments: 5 },
    { title: 'Managing Stress', likes: 15, comments: 3 }
  ];

  return (
    <div>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Profile Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <img src="https://via.placeholder.com/60" alt="Profile" className="rounded-full" />
              <div>
                <h2 className="text-xl font-semibold">Dr. Jane Doe</h2>
                <p className="text-sm text-gray-500">Clinical Psychologist</p>
                <p className="text-sm text-green-500">Available for Sessions</p>
              </div>
            </div>
          </div>

          {/* <div className="p-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


      
              <div className="col-span-1 lg:col-span-2">
                <Calendar />
              </div>
              <div className="col-span-1 lg:col-span-2">
          <CalendlyPopup />
        </div>
            </div>
          </div> */}

          {/* Client Overview */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Active Clients</h3>
            <ul>
              {clients.map((client, index) => (
                <li key={index} className="flex justify-between py-2 border-b border-gray-200">
                  <span>{client.name}</span>
                  <span className="text-gray-500">Next Session: {client.nextSession}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Blogs */}
          <div className="bg-white p-6 rounded-lg shadow-lg col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Recent Blogs</h3>
            <ul>
              {blogs.map((blog, index) => (
                <li key={index} className="flex justify-between py-2 border-b border-gray-200">
                  <span>{blog.title}</span>
                  <span className="text-gray-500">Likes: {blog.likes}, Comments: {blog.comments}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <ul>
              <li>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                  Add New Client
                </button>
              </li>
              <li className="mt-4">
                <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                  Schedule Appointment
                </button>
              </li>
              <li className="mt-4">
                <button className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600">
                  Create Blog Post
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
