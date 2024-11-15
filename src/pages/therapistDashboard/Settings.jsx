import React from 'react';

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>

      {/* Account Settings */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Personal Information</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="p-2 w-full border rounded-md" />
          <input type="email" placeholder="Email Address" className="p-2 w-full border rounded-md" />
          <textarea placeholder="Short Bio" className="p-2 w-full border rounded-md" rows="4"></textarea>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Save Changes</button>
        </form>
      </div>

      {/* Practice Settings */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Practice Information</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Practice Name" className="p-2 w-full border rounded-md" />
          <input type="text" placeholder="Phone Number" className="p-2 w-full border rounded-md" />
          <input type="text" placeholder="Practice Location" className="p-2 w-full border rounded-md" />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Save Changes</button>
        </form>
      </div>

      {/* Security Settings */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Security Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Enable Two-Factor Authentication</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Enable Session Timeout</span>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Save Changes</button>
        </div>
      </div>

      {/* Calendar Settings */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Calendar & Appointment Settings</h3>
        <form className="space-y-4">
          <label className="block">
            <span>Set Available Hours</span>
            <input type="text" placeholder="e.g., 9 AM - 5 PM" className="p-2 w-full border rounded-md" />
          </label>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Save Availability</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
