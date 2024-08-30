
'use client';
import { useEffect, useState } from 'react';
import BarChartWidget from "../components/BarChartWidget";
import DataTableWidget from "../components/DataTableWidget";
import LineChartWidget from "../components/LineChartWidget";
import Link from 'next/link';
import Settings from './settings';

const Dashboard = () => {
  const [theme, setTheme] = useState('light');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Load settings from local storage or an API
    const savedTheme = localStorage.getItem('dashboardTheme');
    const savedFilter = localStorage.getItem('dataFilter');
    
    if (savedTheme) setTheme(savedTheme);
    if (savedFilter) setFilter(savedFilter);
  }, []);

  return (
    <div className={`dashboard ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
      {/* Apply filter logic to each widget */}
      <Settings/>
      <LineChartWidget filter={filter} />
      <BarChartWidget filter={filter} />
      <DataTableWidget filter={filter} />
    </div>
  );
};

export default Dashboard;
