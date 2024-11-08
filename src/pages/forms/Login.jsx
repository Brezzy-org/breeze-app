import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { apiLogin } from "../../services/auth";
import image from "../../assets/images/pic2.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await apiLogin({email, password});
      
      if(response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        
        // SweetAlert for successful login
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have logged in successfully!',
        });
         setTimeout(() => {
          navigate('/dashboard'); 
         }, 2000 );
        
      }
    } catch (error) {
      console.error("Login failed:", error);
      
      // SweetAlert for login failure
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Incorrect email or password. Please try again.',
      });
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen ">
      <div className="relative flex w-full max-w-4xl h-[600px] rounded-3xl border-2 overflow-hidden">
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
            <p className="text-sm text-gray-500 mb-8">Welcome back! We missed you!</p>
            <form onSubmit={handleSubmit}>
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
            
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-1">Password</label>
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
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150"
              >
                Log In
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Don’t have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
