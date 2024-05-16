import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "../../styles/AllUsIpo.css";

const IpoAnalysis = () => {
  const [series] = useState([
    {
      name: "NEA Management Co. LLC",
      border: true,
      data: generateData(23, { min: 9, max: 7800 }),
    },
    {
      name: "Baron Capital Group, Inc.",
      data: generateData(23, { min: 1, max: 7811 }),
    },
    {
      name: "BracePharma Capital",
      data: generateData(23, { min: 21, max: 411 }),
    },
    { name: "Settle, Inc.", data: generateData(23, { min: 1, max: 211 }) },
    {
      name: "Land & Buildings Inv Mgmt Llc",
      data: generateData(23, { min: 61, max: 311 }),
    },
    {
      name: "Saltstone Capital Management LLC",
      data: generateData(23, { min: 131, max: 711 }),
    },
    {
      name: "Kent Lake Capital LLC",
      data: generateData(23, { min: 1, max: 211 }),
    },
    {
      name: "ARS Financial Services, Inc.",
      data: generateData(23, { min: 1, max: 311 }),
    },
    {
      name: "Nykredit Asset Management",
      data: generateData(23, { min: 1, max: 511 }),
    },
    { name: "Scalar Gauge", data: generateData(23, { min: 1, max: 211 }) },
    { name: "Grays Lane Cap", data: generateData(23, { min: 1, max: 611 }) },
    {
      name: "Gate City Capital",
      data: generateData(23, { min: 1, max: 411 }),
    },
    {
      name: "Itau Asset Management",
      data: generateData(23, { min: 1, max: 211 }),
    },
    {
      name: "Neuberger Berman BD LLC",
      data: generateData(23, { min: 1, max: 411 }),
    },
  ]);

  const [options] = useState({
    chart: {
      type: "heatmap",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 1,
    },
    plotOptions: {
      heatmap: {
        radius: 3,
        enableShades: false,
        shape: "square",
        colorScale: {
          ranges: [
            { from: 138, to: 7811, color: "#113997" },
            { from: 14, to: 79, color: "#2759CD" },

            { from: 1, to: 13, color: " #6792F4" },

            { from: 80, to: 140, color: "#CDDDFF" },
          ],
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#fff"],
      },
    },
    xaxis: {
      type: "category",
      labels: {
        show: false,
      },
    },
  });
  function generateData(count, yrange) {
    const series = [];
    for (let i = 0; i < count; i++) {
      const x = "w" + (i + 1).toString();
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      let color;
      let textColor = "#000";
      if (y <= 13) {
        color = "#CDDDFF";
      } else if (y <= 79) {
        color = "#6792F4";
      } else {
        color = "#113997";
      }

      if (y < 10) {
        textColor = "#000";
      }

      series.push({ x: x, y: y, color: color, textColor: textColor });
    }

    series.sort((a, b) => b.y - a.y);
    return series;
  }

  const legendMarkerStyle = {
    display: "none",
  };

  return (
    <div className="w-max-[1440px] w-auto border rounded-lg">
      <div className="flex mt-3 border-b justify-between">
        <h2 className="font-inter text-xs text-lightBlack ms-6 p-2">
          200 results
        </h2>
        <h2 className="font-inter text-xs me-5">Page 1-14</h2>
      </div>
      <div className="flex  p-3 border-b bg-grey2 ">
        <h2 className="font-inter text-xs text-lightBlack ms-4">
          Investor name
        </h2>
        <h2 className="font-inter text-xs text-lightBlack mx-auto">
          IPO Position Held Over Two Quarters (%)
        </h2>
      </div>

      <div className="w-full">
        <style>
          {`
          .apexcharts-legend-marker,
          .apexcharts-legend-text {
            display:none !important; 
           }
            `}
        </style>
        <div className="bg-white shadow-lg">
          <ReactApexChart
            options={options}
            series={series}
            type="heatmap"
            height={620}
            style={{ legendMarkerStyle }}
          />
        </div>
      </div>
    </div>
  );
};

export default IpoAnalysis;
