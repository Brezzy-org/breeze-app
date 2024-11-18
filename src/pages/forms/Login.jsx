import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { apiLogin } from "../../services/auth";
import image from "../../assets/images/pic2.jpg";
import { Link } from "react-router-dom";
import { Lock, Mail, Heart, Sparkles,  } from 'lucide-react';
const Login = () => {
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false)
  const currentYear = new Date().getFullYear();
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
        const response = await apiLogin({ email, password });
        
        if (response.status === 200) {
            // Assuming the response contains userId and accessToken
            const { userId, accessToken } = response.data; // Adjust based on your API response structure
            
            // Store user ID and token in localStorage
            localStorage.setItem("userID", userId); // Store the user ID
            localStorage.setItem("token", accessToken); // Store the token
            
            // SweetAlert for successful login
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'You have logged in successfully!',
            });
            setTimeout(() => {
                navigate('/dashboard'); 
            }, 2000);
        }
    } catch (error) {
        console.error("Login failed:", error);
        
        // SweetAlert for login failure
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Incorrect email or password. Please try again.',
        });
    }finally {
      setLoading(false);
    }
    setTimeout(() => setLoading(false), 2000);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6">
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-28">
        
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center">
          <div className="flex justify-center items-center space-x-2 mb-2">
            <Sparkles className="w-6 h-6 text-white" />
            <h1 className="text-2xl font-bold text-white">User Login</h1>
          </div>
          <p className="text-blue-100 text-sm">Welcome Back We Miss You!</p>
        </div>
  
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
  
            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Mail className="w-4 h-4 mr-2 text-blue-500" />
                Email Address
              </label>
              <input
                type="email"
                name='email'
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                placeholder="jane.smith@example.com"
                required
              />
            </div>
  
            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Lock className="w-4 h-4 mr-2 text-blue-500" />
                Password
              </label>
              <input
                type="password"
                name='password'
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                placeholder="Enter a secure password"
                required
              />
            </div>
  
          </div>
  
          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-medium 
                       hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       transform transition-all duration-200 ease-in-out hover:scale-[1.02]
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </div>
              ) : (
                'Sign in'
              )}
            </button>
          </div>
  
          {/* Login Link */}
          <p className="text-center mt-4 text-gray-600 text-sm">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign up
            </a>
          </p>
        </form>
      </div>
      <div className="flex items-center space-x-1 text-gray-600 mt-5">
              <span>© {currentYear} Breeze. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" />
              <span>for better mental health.</span>
            </div>
    </div>
  </div>
  );
};

export default Login;
