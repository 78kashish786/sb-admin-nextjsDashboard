"use client"
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(0, 123, 255, 0.8)', // blue background
        borderColor: 'rgba(0, 123, 255, 1)', // blue border
        borderWidth: 2, // border width
        barThickness: 50, // thickness of bars
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

  return <Bar data={data} options={options} />;
};

export default BarChart;
