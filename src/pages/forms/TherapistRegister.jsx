import React, { useState } from 'react';
import { Heart, Stethoscope, Mail, Phone, Award, BookOpen, Clock, User, Sparkles } from 'lucide-react';
import { apiTherapistSignup } from '../../services/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
function App() {
  const [loading, setLoading] = useState(false);
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
      const formData = new FormData(event.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const role = formData.get("role");
      const password = formData.get("password");
      const phoneNumber = formData.get("phoneNumber");
      const bio = formData.get("bio");
      const qualifications = formData.get("qualifications");
      const experiencedYears = formData.get("experiencedYears");
      const expertise = formData.get("expertise");

      const payload = { name, email, password, role, phoneNumber, bio, qualifications, experiencedYears, expertise };
      console.log(payload);
      const response = await apiTherapistSignup(payload);
     if(response.status === 200 || response.status === 201)
      Swal.fire({
        icon: 'success',
        title: 'Registered Successfully!',
        text: 'You have successfully created an account.',
        confirmButtonText: 'OK',
      });
      navigate("/therapist-login");
    } catch (error) {
      console.error("Error details: ", error);
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
       <Link to="/"><FaArrowLeft className="font-bold text-4xl text-blue-600"/></Link> 
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-white" />
              <h1 className="text-3xl font-bold text-white">Therapist Registration</h1>
            </div>
            <p className="text-blue-100">Join our community of mental health professionals</p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
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

                <div className="relative">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Phone className="w-4 h-4 mr-2 text-blue-500" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name='phoneNumber'
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Award className="w-4 h-4 mr-2 text-blue-500" />
                    Qualifications
                  </label>
                  <input
                    type="text"
                    name='qualifications'
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                    placeholder="Ph.D. in Clinical Psychology"
                    required
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-4">
                <div className="relative">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Stethoscope className="w-4 h-4 mr-2 text-blue-500" />
                    Areas of Expertise
                  </label>
                  <input
                    type="text"
                    name='expertise'
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                    placeholder="Anxiety, Depression, PTSD"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    name='experiencedYears'
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                    placeholder="5"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                    Professional Bio
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out h-32 resize-none"
                    placeholder="Tell us about your experience and approach to therapy..."
                    required
                    name='bio'
                  ></textarea>
                </div>
              </div>

              {/* Password Field - Full Width */}
              <div className="col-span">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
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
              <div className="col-span">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="user"
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      required
                    />
                    <label className="ml-2 text-gray-700">User</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="therapist"
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      required
                    />
                    <label className="ml-2 text-gray-700">Therapist</label>
                  </div>
                </div>
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
              <a href="/therapist-login" className="text-blue-600 hover:text-blue-700 font-medium">
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
}

export default App;