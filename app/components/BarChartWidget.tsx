import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Define possible filter values
type FilterType = 'all' | 'active' | 'inactive';

// Define props for the BarChartWidget
interface BarChartWidgetProps {
  filter: FilterType;
}

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartWidget: React.FC<BarChartWidgetProps> = ({ filter }) => {
  // Sample data and options; you might want to adjust based on filter value
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Sales Data - Filter: ${filter}`,
      },
    },
  };

  return (
    <div className="widget">
      <h3 className="widget-title">Bar Chart</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChartWidget;
