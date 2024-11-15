import React from 'react';

const Resources = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Therapist Resources</h2>

      {/* Tabs for Different Categories */}
      <div className="flex space-x-4 mb-6">
        <button className="py-2 px-4 bg-gray-200 rounded-md text-sm">Therapeutic Tools</button>
        <button className="py-2 px-4 bg-gray-200 rounded-md text-sm">Educational Content</button>
        <button className="py-2 px-4 bg-gray-200 rounded-md text-sm">Client Management</button>
        <button className="py-2 px-4 bg-gray-200 rounded-md text-sm">Practice Management</button>
        <button className="py-2 px-4 bg-gray-200 rounded-md text-sm">Self-Care</button>
      </div>

      {/* Resource List */}
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Guided Meditation Video</h3>
          <p className="text-sm text-gray-600">A relaxing guided meditation session for stress relief.</p>
          <button className="mt-2 text-blue-500">Watch Now</button>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">CBT Thought Record Worksheet</h3>
          <p className="text-sm text-gray-600">Download a worksheet to track negative thoughts and reframe them.</p>
          <button className="mt-2 text-blue-500">Download PDF</button>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Therapist Self-Care Tips</h3>
          <p className="text-sm text-gray-600">Learn how to prioritize your well-being as a mental health professional.</p>
          <button className="mt-2 text-blue-500">Read Article</button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
