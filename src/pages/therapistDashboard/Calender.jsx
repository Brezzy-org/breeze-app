import React from 'react';
import { InlineWidget } from "react-calendly";
import { Calendar as CalendarIcon, Clock, Users } from 'lucide-react';

const Calendar = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Appointment Management</h1>
          <p className="mt-2 text-gray-600">Manage your therapy sessions and client appointments</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center">
              <CalendarIcon className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Today's Sessions</p>
                <p className="text-2xl font-semibold text-gray-900">8</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Available Hours</p>
                <p className="text-2xl font-semibold text-gray-900">6h 30m</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Clients</p>
                <p className="text-2xl font-semibold text-gray-900">42</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h2 className="text-xl font-semibold text-gray-900">Appointment Calendar</h2>
            <p className="mt-1 text-sm text-gray-500">Schedule and manage your therapy sessions</p>
          </div>
          
          <div className="h-[800px] p-4">
            <InlineWidget 
              url="https://calendly.com/jakpesad20"
              styles={{
                height: '100%',
                width: '100%',
              }}
              prefill={{
                email: "therapist@example.com",
                firstName: "Dr.",
                lastName: "Smith",
                name: "Dr. Smith"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;