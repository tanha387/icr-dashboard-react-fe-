import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Barchart = () => {
  const options = {
    animationEnabled: true,
    axisX: {
      title: "",
      labelFormatter: function () {
        return "";
      },
      lineColor: "#D3D3D3",
      tickColor: "#D3D3D3",
      gridColor: "#D3D3D3",
      stripLines: [
        {
          startValue: 4,
          endValue: 6,
          color: "#ffffff",
        },
      ],
    },
    axisY: {
      labelFormatter: function (e) {
        switch (e.value) {
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
      lineColor: "#d9d9d9",
      tickColor: "#d9d9d9",
      gridColor: "#f5f5f5",
      gridThickness: 1, // Thickness of grid lines
      gridDashType: "dash", // Type of grid lines (solid, dash, dot, etc.)
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "column",
        name: "First Draft",

        showInLegend: true,
        yValueFormatString: "#",
        color: "#5388D899", // Original color for columns
        dataPoints: [
          { x: 0, y: 5500000 },
          { x: 1, y: 5500000 },
          { x: 2, y: 4800000 },
          { x: 3, y: 4900000 },
          { x: 4, y: 4200000 },
          { x: 5, y: 3800000 },
          { x: 6, y: 3900000 },
          { x: 7, y: 4200000 },
          { x: 8, y: 3800000 },
          { x: 9, y: 3800000 },
          { x: 10, y: 3800000 },
          { x: 11, y: 3000000 },
          { x: 12, y: 3700000 },
          { x: 13, y: 3000000 },
          { x: 14, y: 3500000 },
          { x: 15, y: 3000000 },
          { x: 16, y: 3200000 },
          { x: 17, y: 3000000 },
          { x: 18, y: 3000000 },
          { x: 19, y: 3000000 },
          { x: 20, y: 2500000 },
          { x: 21, y: 2000000 },
          { x: 22, y: 1800000 },
          { x: 23, y: 1600000 },
          { x: 24, y: 1700000 },
          { x: 25, y: 1200000 },
          { x: 26, y: 1100000 },
          { x: 27, y: 1000000 },
          { x: 28, y: 900000 },
          { x: 29, y: 900000 },
          { x: 30, y: 700000 },
          { x: 31, y: 600000 },
          { x: 32, y: 500000 },
          { x: 33, y: 500000 },
          { x: 34, y: 500000 },
          { x: 35, y: 400000 },
          { x: 36, y: 400000 },
          { x: 37, y: 400000 },
          { x: 38, y: 300000 },
          { x: 39, y: 400000 },
          { x: 40, y: 300000 },
          { x: 41, y: 400000 },
          { x: 42, y: 300000 },
          { x: 43, y: 200000 },
          { x: 44, y: 300000 },
          { x: 45, y: 300000 },
          { x: 46, y: 300000 },
          { x: 47, y: 300000 },
          { x: 48, y: 300000 },
          { x: 49, y: 200000 },
          { x: 50, y: 200000 },
          { x: 51, y: 200000 },
          { x: 52, y: 200000 },
          { x: 53, y: 200000 },
          { x: 54, y: 200000 },
          { x: 55, y: 100000 },
          { x: 56, y: 100000 },
          { x: 57, y: 100000 },
          { x: 58, y: 100000 },
          { x: 59, y: 100000 },
          { x: 60, y: 100000 },
          { x: 61, y: 100000 },
          { x: 62, y: 100000 },
          { x: 63, y: 100000 },
          { x: 64, y: 0 },
        ],
      },
    ],
  };

  return (
    <div className="border bg-white rounded-lg shadow-lg mt-8 h-[503px] 	max-w-[1436px] w-full">
      <h2 className="text-left text-lg font-semibold leading-7 font-inter-bold border-b p-5 text-lightBlack">
        Investor Distribution / Tai
      </h2>
      <div className="p-8">
        <CanvasJSChart options={options} />
      </div>
    </div>
  );
};

export default Barchart;
