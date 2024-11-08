import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TherapistSidebar from '../components/TherapistSidebar';

import TherapistHeader from '../components/TherapistHeader';

const TherapistDashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div className="flex">
      <TherapistSidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />
      <div className="flex-1">
        <TherapistHeader onToggle={toggleSidebar} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default TherapistDashboardLayout;
