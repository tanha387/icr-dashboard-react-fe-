import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import Icon from "../../assets/images/Icons/Left.svg";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DonutCharts2 = () => {
  const dataPoints = [
    { name: "High", y: 31, color: "#FF9528" },

    { name: "Low", y: 9, color: "#FFF0E1" },
    { name: "Medium", y: 35, color: "#FFC488" },
  ];

  const dataPoints2 = [
    { name: "High", y: 51, color: "#FF9528" },

    { name: "Low", y: 13, color: "#FFF0E1" },
    { name: "Medium", y: 8, color: "#FFC488" },
  ];

  const subtitleStyle = {
    color: "#272E35",
    fontFamily: "Inter-bold",
    fontSize: 14,
    fontWeight: 600, // Valid numeric value within the range
    textAlign: "center",
  };

  const options1 = {
    animationEnabled: true,
    showInLegend: true,
    subtitles: [
      {
        text: "Final Draft",
        verticalAlign: "center",
        ...subtitleStyle,
      },
    ],

    data: [{ type: "doughnut", dataPoints }],
  };

  const options2 = {
    animationEnabled: true,
    subtitles: [
      {
        text: "Final Allocation",
        verticalAlign: "center",
        ...subtitleStyle,
      },
    ],

    data: [{ type: "doughnut", dataPoints: dataPoints2 }],
  };

  // Extract names and colors from dataPoints2
  const namesAndColors = dataPoints.map((point) => ({
    name: point.name,
    color: point.color,
  }));

  return (
    <div className="flex flex-col  sm:w-[704px] sm:h-[493px] h-[393px] bg-white rounded-lg shadow-lg ">
      <h1 className="border-b border-lightGrey p-5 font-inter-bold text-base leading-7 text-left text-lightBlack">
        Distribution of Investor Type
      </h1>
      <div>
        <div className="flex flex-col sm:flex-row px-5">
          <CanvasJSChart options={options1} className="sm:mr-2  " />
          <img src={Icon} className="w-24 h-9 mt-56 " />
          <CanvasJSChart options={options2} className="sm:ml-2 " />
        </div>
        <div className="flex flex-wrap  space-x-6 ms-44 pb-9">
          {namesAndColors.map(({ name, color }, index) => (
            <div
              key={index}
              className="relative flex items-center  w-full sm:w-auto"
            >
              <div
                className="w-2 h-2 rounded-full absolute"
                style={{ backgroundColor: color }}
              ></div>
              <h3 className="mx-2 sm:mx-8 text-xs sm:text-sm font-inter text-steelBlue leading-5 tracking-normal text-left">
                {name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutCharts2;
