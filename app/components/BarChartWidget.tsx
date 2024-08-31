import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns'; // Example of importing an adapter if needed

const BarChartWidget = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
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

  return <Bar data={data} options={options} />;
};

export default BarChartWidget;
