import { useState } from 'react';

const Settings = () => {
    const [dashboardTheme, setDashboardTheme] = useState('light');
    const [dataFilter, setDataFilter] = useState('all');

    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDashboardTheme(e.target.value);
        // Save the preference (e.g., in local storage or send it to an API)
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDataFilter(e.target.value);
        // Save the filter setting
    };

    return (
        <div className="settings">
            <h2>Settings</h2>

            <div className='flex items-center gap-11'>

            <div className="settings-option flex items-center gap-3">
                <label htmlFor="theme-select " className='font-semibold text-xl'>Dashboard Theme:</label>
                <select id="theme-select" value={dashboardTheme} onChange={handleThemeChange}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>

            <div className="settings-option flex items-center gap-4">
                <label htmlFor="filter-select" className='font-semibold text-xl'>Data Filter:</label>
                <select id="filter-select" value={dataFilter} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="sales">Sales</option>
                    <option value="revenue">Revenue</option>
                    <option value="customers">Customers</option>
                </select>
            </div>
            </div>

        </div>
    );
};

export default Settings;
