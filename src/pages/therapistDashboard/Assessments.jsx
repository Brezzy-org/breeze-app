import React, { useState, useEffect } from 'react';

const Assessments = () => {
  const [assessments, setAssessments] = useState([]);
  const [selectedClient, setSelectedClient] = useState('');
  const [newAssessment, setNewAssessment] = useState('');
  const [clientList, setClientList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock fetch assessments (replace with API call)
  useEffect(() => {
    fetchAssessments();
    fetchClients();
  }, []);

  const fetchAssessments = async () => {
    setLoading(true);
    try {
      // Replace with your backend API call
      const data = [
        { id: 1, name: 'PHQ-9', client: 'John Doe', status: 'Completed', date: '2024-11-15' },
        { id: 2, name: 'GAD-7', client: 'Jane Smith', status: 'Pending', date: '2024-11-14' },
      ];
      setAssessments(data);
    } catch (error) {
      console.error('Failed to fetch assessments:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchClients = async () => {
    // Replace with API call for clients
    const clients = ['John Doe', 'Jane Smith', 'Alice Johnson'];
    setClientList(clients);
  };

  const handleAssignAssessment = () => {
    if (selectedClient && newAssessment) {
      // API call to assign assessment
      const newEntry = {
        id: assessments.length + 1,
        name: newAssessment,
        client: selectedClient,
        status: 'Pending',
        date: new Date().toISOString().split('T')[0],
      };
      setAssessments([...assessments, newEntry]);
      setSelectedClient('');
      setNewAssessment('');
      alert('Assessment assigned successfully!');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Assessments</h1>

      {/* Assign Assessment */}
      <div className="mb-8 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Assign New Assessment</h2>
        <div className="flex space-x-4">
          <select
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Select Client</option>
            {clientList.map((client, index) => (
              <option key={index} value={client}>
                {client}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Assessment Name"
            value={newAssessment}
            onChange={(e) => setNewAssessment(e.target.value)}
            className="p-2 border rounded"
          />

          <button
            onClick={handleAssignAssessment}
            className="p-2 bg-blue-600 text-white rounded"
          >
            Assign
          </button>
        </div>
      </div>

      {/* Assessment List */}
      <div className="bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4 p-4">Assessment List</h2>
        {loading ? (
          <div className="p-4 text-center">Loading assessments...</div>
        ) : assessments.length > 0 ? (
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Client</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {assessments.map((assessment) => (
                <tr key={assessment.id}>
                  <td className="p-2 border">{assessment.name}</td>
                  <td className="p-2 border">{assessment.client}</td>
                  <td className="p-2 border">{assessment.status}</td>
                  <td className="p-2 border">{assessment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-4 text-center">No assessments found.</div>
        )}
      </div>
    </div>
  );
};

export default Assessments;
