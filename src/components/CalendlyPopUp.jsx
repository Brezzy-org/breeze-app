import React, { useEffect } from 'react';

const CalendlyPopup = () => {
  useEffect(() => {
    if (window.Calendly) {
      console.log('Calendly script loaded');
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/YOURLINK',
      });
    } else {
      console.log('Calendly script not loaded');
    }
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Schedule Appointment</h3>
      <button
        onClick={() => window.Calendly.initPopupWidget({ url: 'https://calendly.com/YOURLINK' })}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Open Calendar
      </button>
    </div>
  );
};

export default CalendlyPopup;
