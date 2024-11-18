import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { apiSignup } from "../../services/auth";
;
import { Link } from "react-router-dom";
import { Heart, Lock, Mail, Sparkles, User } from "lucide-react";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(event.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      const payload = { name, email, password };

      const response = await apiSignup(payload);

      Swal.fire({
        icon: 'success',
        title: 'Registered Successfully!',
        text: 'You have successfully created an account.',
        confirmButtonText: 'OK',
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.response?.data?.message || 'Something went wrong!',
        confirmButtonText: 'Try Again',
      });
    } finally {
      setLoading(false);
    }
    setTimeout(() => setLoading(false), 2000);
  };

  return (
   
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-white" />
              <h1 className="text-3xl font-bold text-white">User Registration</h1>
            </div>
            <p className="text-blue-100">Join our community</p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className=" gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <div className="relative">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <User className="w-4 h-4 mr-2 text-blue-500" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name='name'
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                    placeholder="Dr. Jane Smith"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 mr-2 text-blue-500" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name='email'
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                    placeholder="jane.smith@example.com"
                    required
                  />
                </div>




              </div>

          

              {/* Password Field - Full Width */}
              <div className="col-span">
                <label className="flex items-center text-sm font-medium text-gray-700 mt-2">
                <Lock className="w-4 h-4 mr-2 text-blue-500" />
                  Password
                </label>
                <input
                  type="password"
                  name='password'
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                  placeholder="Enter a secure password"
                  required
                />
              </div>

            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-medium 
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
                  'Complete Registration'
                )}
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center mt-6 text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign in
              </a>
            </p>
          </form>
        </div>
        <div className="flex items-center space-x-1 text-gray-600">
          <span>© {currentYear} Breeze. Made with</span>
          <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" />
          <span>for better mental health.</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
