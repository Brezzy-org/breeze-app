import React from 'react';

const Clients = () => {
  // Sample data (in real app, these would come from your state or API)
  const clients = [
    { name: 'John Doe', age: 32, nextSession: '10/25/2024', moodStatus: 'Good', notes: 'Improvement in anxiety levels' },
    { name: 'Jane Smith', age: 29, nextSession: '10/26/2024', moodStatus: 'Neutral', notes: 'Working on stress management' },
    { name: 'Bob Johnson', age: 41, nextSession: '10/28/2024', moodStatus: 'Low', notes: 'Focus on anger management' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Client Overview</h3>
      <ul>
        {clients.map((client, index) => (
          <li key={index} className="flex justify-between py-4 border-b border-gray-200">
            <div>
              <h4 className="text-lg font-semibold">{client.name}</h4>
              <p className="text-sm text-gray-500">Age: {client.age}</p>
              <p className="text-sm text-gray-500">Next Session: {client.nextSession}</p>
              <p className="text-sm text-gray-500">Mood Status: 
                <span className={`font-semibold ${client.moodStatus === 'Good' ? 'text-green-500' : client.moodStatus === 'Neutral' ? 'text-yellow-500' : 'text-red-500'}`}>
                  {client.moodStatus}
                </span>
              </p>
              <p className="text-sm text-gray-500">Notes: {client.notes}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-indigo-500 hover:text-indigo-600 text-sm">View Details</button>
              <button className="text-blue-500 hover:text-blue-600 text-sm">Add Note</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clients;
