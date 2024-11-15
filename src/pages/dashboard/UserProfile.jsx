import React, { useEffect, useState, useRef } from 'react';
import Swal from 'sweetalert2';
import { getUserData, updateUserProfile } from '../../services/auth';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getUserData();
        setProfile(response.data);
        setUserID(response.data.id);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchProfile();
  }, []);

  const handleEditProfile = () => {
    if (profile) {
      // Check if refs are defined before setting their values
      if (nameRef.current && emailRef.current) {
        nameRef.current.value = profile.name;
        // emailRef.current.value = profile.email;
      }
      setShowModal(true); // Show the modal
    }
  };

  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    try {
      const updatedProfile = {
        name: nameRef.current.value,
        // email: emailRef.current.value,
      };
      await updateUserProfile(userID, updatedProfile);

      Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: 'Your profile has been updated successfully.',
        confirmButtonText: 'OK'
      });

      setProfile({ ...profile, ...updatedProfile });
      setShowModal(false); // Close the modal after updating
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: error.response?.data?.message || 'Something went wrong!',
        confirmButtonText: 'Try Again'
      });
    }
  };

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-blue-600">User Profile</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
      </div>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={handleEditProfile}
      >
        Update Profile
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Update Profile</h3>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <input 
                type="text" 
                ref={nameRef} 
                placeholder="Name" 
                className="w-full p-2 border rounded" 
              />
              {/* <input 
                type="email" 
                ref={emailRef} 
                placeholder="Email" 
                className="w-full p-2 border rounded" 
              /> */}
              <div className="flex justify-end space-x-2">
                <button 
                  type="button" 
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400" 
                  onClick={() => setShowModal(false)} // Close modal
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;