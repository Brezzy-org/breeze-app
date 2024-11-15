import React from 'react'

const Calender = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
  <h3 className="text-xl font-semibold mb-4">Upcoming Appointments</h3>
  <div className="relative" style={{ paddingTop: '56.25%' }}> 
    <iframe 
      src="https://calendly.com/your-therapist-profile" 
      width="100%" 
      height="100%" 
      title="Therapist Calendar"
      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
      style={{ border: 'none' }}  // Add this line to remove the border
    ></iframe>
  </div>
</div>
  )
}

export default Calender