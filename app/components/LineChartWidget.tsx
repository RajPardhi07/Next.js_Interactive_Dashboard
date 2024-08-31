import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Define possible filter values
type FilterType = 'all' | 'active' | 'inactive';

// Define props for the LineChartWidget
interface LineChartWidgetProps {
  filter: FilterType;
}

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartWidget: React.FC<LineChartWidgetProps> = ({ filter }) => {
  // Sample data and options; you might want to adjust based on filter value
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
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
        text: `Revenue Data - Filter: ${filter}`,
      },
    },
  };

  return (
    <div className="widget">
      <h3 className="widget-title">Line Chart</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartWidget;
