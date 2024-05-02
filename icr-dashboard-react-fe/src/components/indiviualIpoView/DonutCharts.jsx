import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DonutCharts = () => {
  const dataPoints = [
    { name: "Hedge Fund", y: 31, color: "#F4BE37" },
    { name: "Venture Capital", y: 9, color: "#FF9F40" },
    { name: "Institutional Investor", y: 35, color: "#0D2535" },
    { name: "Mutual Fund", y: 30, color: "#5388D8" },
  ];

  const dataPoints2 = [
    { name: "Mutual Fund", y: 45, color: "#5388D8" },
    { name: "Hedge Fund", y: 11, color: "#F4BE37" },
    { name: "Venture Capital", y: 25, color: "#FF9F40" },
    { name: "Institutional Investor", y: 35, color: "#0D2535" },
  ];

  const subtitleStyle = {
    color: "#272E35",
    fontFamily: "Inter-bold",
    fontSize: 14,
    fontWeight: 700, // Valid numeric value within the range
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
    width: 270,
    height: 270,
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
    width: 270,
    height: 270,
    data: [{ type: "doughnut", dataPoints: dataPoints2 }],
  };

  // Extract names and colors from dataPoints2
  const namesAndColors = dataPoints2.map((point) => ({
    name: point.name,
    color: point.color,
  }));

  return (
    <div className="flex flex-col sm:w-[704px] sm:h-[443px] h-[383px] bg-white rounded-lg shadow-lg">
      <h1 className="border-b border-lightGrey p-5 font-inter-bold text-base leading-7 text-left text-lightBlack">
        Distribution of Investor Type
      </h1>
      <div>
        <div className="flex flex-col sm:flex-row">
          <CanvasJSChart options={options1} className="sm:mr-2 p-8" />
          <CanvasJSChart options={options2} className="sm:ml-2" />
        </div>
        <div className="flex p-4 space-x-6 ms-4">
          {namesAndColors.map(({ name, color }, index) => (
            <div key={index} className="relative flex items-center mt-20">
              <div
                className="w-2 h-2 rounded-full absolute"
                style={{ backgroundColor: color }}
              ></div>
              <h3 className="mx-8  text-xs font-inter text-steelBlue leading-5 tracking-normal text-left ">
                {name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutCharts;
