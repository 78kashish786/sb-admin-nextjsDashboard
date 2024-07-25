"use client"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(0, 123, 255, 1)', // light blue background
        borderColor: 'rgba(0, 123, 255, 1)', // blue border
        tension: 0.4, // to make the line curved
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value',
        },
        min: 0,
        max: 100,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
