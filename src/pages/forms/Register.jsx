import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { apiSignup } from "../../services/auth";
import image from "../../assets/images/pic2.jpg";
import { Link } from "react-router-dom";

const Register = () => {
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
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen ">
      <div className="relative flex w-full max-w-4xl h-[600px]  rounded-3xl border-2 overflow-hidden">
        <div className="w-1/2 bg-cover bg-center relative">
          <div className="absolute inset-0 flex flex-col justify-between p-8 text-white z-10">
            <div>
              <div className="absolute inset-y-0 left-0 w-full">
                <img src={image} alt="background" className="h-full w-full object-cover" />
              </div>
              <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded-full mt-4 absolute bottom-10 left-8 z-20">Join Us</button>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <Link to="/">
                  <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded-full mt-4 absolute bottom-10 right-8 z-20">Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center bg-white p-8">
          <div className="w-full">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Hello Guest!</h2>
            <p className="text-sm text-gray-500 mb-8">Welcome to Breeze</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150"
              >
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
