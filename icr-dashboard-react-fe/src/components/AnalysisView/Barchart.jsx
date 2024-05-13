import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
const BarChart = () => {
  const data = {
    labels: Array.from({ length: 64 }, (_, i) => (i + 1).toString()), // Generating labels from 1 to 64
    datasets: [
      {
        label: "First Draft",
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
          120000, 120000, 120000, 120000, 120000, 20000, 20000, 120000, 20000,
          120000, 20000, 120000, 180000, 80000, 10000, 80000, 80000, 480000,
          480000, 80000, 80000, 80000, 80000, 80000, 80000, 80000, 80000, 80000,
          30000, 40000, 40000, 40000, 40000,
        ].sort((a, b) => b - a),
        categoryPercentage: 1.0,
        barPercentage: 0.7,
      },
      {
        label: "Final Allocation",

        backgroundColor: "#F59638",
        borderColor: "#F59638",
        borderWidth: 1,
        data: [
          5900000, 5500000, 4600000, 3100000, 4700000, 1300000, 1300000,
          3100000, 4700000, 2300000, 3000000, 3400000, 3800000, 1100000,
          1300000, 5600000, 5200000, 3600000, 3100000, 4700000, 4300000,
          3000000, 120000, 120000, 120000, 120000, 120000, 120000, 120000,
          120000, 120000, 120000, 120000, 120000, 20000, 20000, 120000, 20000,
          120000, 20000, 120000, 180000, 80000, 10000, 80000, 80000, 480000,
          480000, 80000, 80000, 80000, 80000, 80000, 80000, 80000, 80000, 80000,
          30000, 40000, 40000, 40000, 40000,
        ].sort((a, b) => b - a),
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        legend: {
          display: true,
        },
        grid: {
          display: true,
          lineWidth: 2,
          color: "rgba(128, 128, 128, 0.1)",
        },
        ticks: {
          display: true,
          maxTicksLimit: 13,
          precision: 4,
          color: "rgba(0, 0, 0, 0)",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          maxTicksLimit: 5,
          color: "rgba(0, 0, 0, 0.38)",
          font: {
            family: "Inter",
            size: 12,
          },
          precision: 0, // S
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
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          boxWidth: 10,
          padding: 30,
          margin: 30,
          font: {
            family: "Inter",
            size: 11, // Font size in pixels
            color: "#555F6D",
          },
          textAlign: "start",
        },
      },
    },
  };
  return (
    <div className="w-full max-h-[503px] h-auto  border my-4 rounded-lg shadow-lg bg-white ">
      <h2 className="border-b  p-5  text-left text-lg font-semibold leading-7 font-inter-bold  text-lightBlack">
        Investor Distribution / Tail
      </h2>
      <div className="w-full h-[341px]  ps-5 mt-8 ">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};
export default BarChart;
