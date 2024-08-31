import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

// Define the types for the data and options props
const data: ChartData<'bar'> = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(75,192,192,1)',
    },
  ],
};

const options: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sales Data',
    },
  },
};

const BarChartWidget: React.FC = () => {
  return <Bar data={data} options={options} />;
};

export default BarChartWidget;
