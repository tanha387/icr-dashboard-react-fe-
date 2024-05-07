import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // This line automatically registers all elements

const BarChart = () => {
  // Sample data for the bar chart
  const data = {
    labels: Array.from({ length: 66 }, (_, i) => (i + 1).toString()), // Creating labels from 1 to 66
    datasets: [
      {
        label: "Sales",
        backgroundColor: "rgba(83, 136, 216, 0.6)",
        borderColor: "rgba(83, 136, 216, 0.6)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [
          5900000, 5500000, 4600000, 3100000, 4700000, 1300000, 1300000,
          3100000, 4700000, 2300000, 3000000, 3400000, 3800000, 1100000,
          1300000, 5600000, 5200000, 3600000, 3100000, 4700000, 4300000,
          3000000, 120000, 120000, 120000, 120000, 120000, 120000, 120000,
          120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000,
          120000, 120000, 120000, 120000, 180000, 180000, 180000, 480000,
          380000, 480000, 480000, 80000, 80000, 80000, 80000, 80000, 80000,
          80000, 80000, 80000, 30000, 40000, 40000, 40000, 40000,
        ].sort((a, b) => b - a), // Sort the data in descending order
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false, // Hide the x-axis labels
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value, index, values) {
            switch (value) {
              case 0:
                return "0";
              case 2000000:
                return "2M";
              case 4000000:
                return "4M";
              case 6000000:
                return "6M";
              default:
                return "";
            }
          },
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                boxWidth: 20,
                padding: 10,
              },
            },
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-[503px] border m-5">
      <h2 className="border-b p-5">Bar Chart Example</h2>
      <div className="w-full h-[341px] px-5">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
