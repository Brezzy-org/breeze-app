import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiTherapistSignup } from '../../services/auth';

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(event.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const role = formData.get("role");
      const phoneNumber = formData.get("phone");
      const bio = formData.get("bio");
      const qualifications = formData.get("qualifications");
      const expertise = formData.get("expertise");
      const experiencedYears = formData.get("experiencedYears");

      const payload = { name, email, password, role, phoneNumber, bio, qualifications, expertise, experiencedYears };

      await apiTherapistSignup(payload);

      // Success SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Registered Successfully!',
        text: 'You have successfully created an account.',
        confirmButtonText: 'OK',
      });
      navigate("/therapist-login"); // Redirect to login page
    } catch (error) {
      // Error SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.response?.data?.message || 'Something went wrong!',
        confirmButtonText: 'Try Again',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center therapist p-8">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Therapist Sign-Up</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input type="text" name="name" placeholder="Enter your name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input type="email" name="email" placeholder="Enter your email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Password</label>
            <input type="password" name="password" placeholder="Enter your password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Role</label>
            <div className="flex gap-4 mt-2">
              <div className="flex items-center">
                <input type="radio" id="user" name="role" value="user" className="mr-2" />
                <label htmlFor="user" className="text-gray-600">User</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="therapist" name="role" value="therapist" defaultChecked className="mr-2" />
                <label htmlFor="therapist" className="text-gray-600">Therapist</label>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your phone number" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Qualifications</label>
            <input type="text" name="qualifications" placeholder="Your qualifications" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Expertise</label>
            <input type="text" name="expertise" placeholder="Areas of expertise" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Years of Experience</label>
            <input type="number" name="experiencedYears" placeholder="Years of experience" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" required />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-semibold">Bio</label>
            <textarea name="bio" placeholder="Tell us about yourself" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" rows="3" required></textarea>
          </div>
          <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        </form>
        
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <a href="/therapist-login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
