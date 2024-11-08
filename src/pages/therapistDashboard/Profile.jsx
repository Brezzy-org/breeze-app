import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getTherapistData, updateTherapistProfile } from '../../services/auth';

const TherapistProfile = () => {
  const [profile, setProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    qualifications: '',
    expertise: '',
    experiencedYears: '',
    bio: ''
  });

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getTherapistData();
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching therapist profile:", error);
      }
    };
    fetchProfile();
  }, []);

  // Open modal with current profile data prefilled
  const handleEditProfile = () => {
    if (profile) {
      setFormData({
        name: profile.name,
        phoneNumber: profile.phoneNumber,
        qualifications: profile.qualifications,
        expertise: profile.expertise,
        experiencedYears: profile.experiencedYears,
        bio: profile.bio
      });
      setShowModal(true);
    }
  };

  // Handle profile update form submission
  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    try {
      const { name, phoneNumber, qualifications, expertise, experiencedYears, bio } = formData;
      await updateTherapistProfile({ name, phoneNumber, qualifications, expertise, experiencedYears, bio });
      
      // Success notification
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: 'Your profile has been updated successfully.',
        confirmButtonText: 'OK'
      });

      // Update local state with new profile data and close modal
      setProfile({ ...profile, ...formData });
      setShowModal(false);
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
      <h2 className="text-2xl font-bold text-blue-600">Therapist Profile</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone Number:</strong> {profile.phoneNumber}</p>
        <p><strong>Qualifications:</strong> {profile.qualifications}</p>
        <p><strong>Expertise:</strong> {profile.expertise}</p>
        <p><strong>Years of Experience:</strong> {profile.experiencedYears}</p>
        <p><strong>Bio:</strong> {profile.bio}</p>
      </div>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={handleEditProfile}
      >
        Update Profile
      </button>

      {/* Update Profile Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Update Profile</h3>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <input type="text" name="name" value={formData.name} placeholder="Name" 
                className="w-full p-2 border rounded" 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} placeholder="Phone Number" 
                className="w-full p-2 border rounded" 
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              />
              <input type="text" name="qualifications" value={formData.qualifications} placeholder="Qualifications" 
                className="w-full p-2 border rounded" 
                onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
              />
              <input type="text" name="expertise" value={formData.expertise} placeholder="Expertise" 
                className="w-full p-2 border rounded" 
                onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
              />
              <input type="number" name="experiencedYears" value={formData.experiencedYears} placeholder="Years of Experience" 
                className="w-full p-2 border rounded" 
                onChange={(e) => setFormData({ ...formData, experiencedYears: e.target.value })}
              />
              <textarea name="bio" value={formData.bio} placeholder="Bio" rows="3" 
                className="w-full p-2 border rounded" 
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              />
              <div className="flex justify-end space-x-2">
                <button 
                  type="button" 
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400" 
                  onClick={() => setShowModal(false)}
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

export default TherapistProfile;
