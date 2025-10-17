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
        borderColor: ' white',
        fill: true,
      }
    ]
  };

  const options = {
    responsive: true,
    layout: {
      padding: {
        left: 1,   // extra spacing on the left
        right: 1,  // extra spacing on the right
        top: 5,    // extra spacing on the top
        bottom: 5  // extra spacing on the bottom
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 20 },
          color: 'white'
        }
      },
      title: {
        display: true,
        text: 'Car Accidents Over The Years',
        font: { size: 30, weight: 'bold' },
        color: 'rgb(107, 90, 255)'
      }
    },
    scales: {
      x: {
        ticks: {
          padding: 15,   // extra space between labels and axis line
          font: { size: 18 },
          color: 'rgb(0, 94, 255)'
        },
        title: {
          display: true,
          text: 'Year',
          font: { size: 20, weight: 'bold' },
          color: 'white'
        }
      },
      y: {
        ticks: {
          padding: 15,   // extra space between numbers and axis line
          font: { size: 18 },
          color: 'rgb(0, 94, 255)'
        },
        title: {
          display: true,
          text: 'Total Accidents',
          font: { size: 20, weight: 'bold' },
          color: 'white'
        }
      }
    }
  };
  

  

  return <Line data={chartData} options={options} />;
}

export default Graph;
