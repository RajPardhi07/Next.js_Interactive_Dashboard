'use client';
import { useEffect, useState } from 'react';
import BarChartWidget from "../components/BarChartWidget";
import DataTableWidget from "../components/DataTableWidget";
import LineChartWidget from "../components/LineChartWidget";
import Settings from './settings';

// Define possible filter values
type FilterType = 'all' | 'active' | 'inactive';

const Dashboard: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');
  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    // Load settings from local storage or an API
    const savedTheme = localStorage.getItem('dashboardTheme');
    const savedFilter = localStorage.getItem('dataFilter') as FilterType;
    
    if (savedTheme) setTheme(savedTheme);
    if (savedFilter) setFilter(savedFilter);
  }, []);

  return (
    <div className={`dashboard ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
      <Settings />
      <LineChartWidget filter={filter} />
      <BarChartWidget filter={filter} />
      <DataTableWidget filter={filter} />
    </div>
  );
};

export default Dashboard;
