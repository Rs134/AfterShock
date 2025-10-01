import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Graph({ data }) {
  const chartData = {
    labels: data.map(d => d.year),
    datasets: [
      {
        label: 'Car Accidents per Year',
        data: data.map(d => d.totalAccidents),
        borderColor: 'rgb(255, 191, 0)',
        backgroundColor: 'rgba(255,0,0,0.2)',
        fill: true,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },    }
  };

  return <Line data={chartData} options={options} />;
}

export default Graph;
