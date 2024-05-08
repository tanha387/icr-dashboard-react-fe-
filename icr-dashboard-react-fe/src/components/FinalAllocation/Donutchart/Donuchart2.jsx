import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Icon from "../../../assets/images/Icons/Left.svg";

ChartJS.register(ArcElement, Tooltip, Legend);
const centerTextPluginObject = {
  id: "centerTextPlugin",
  beforeDraw: (chart) => {
    const ctx = chart.ctx;
    const canvas = chart.canvas;
    const text = chart.options.plugins.centerTextPlugin.text;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#272E35";
    ctx.font = "600 14px Inter";

    ctx.fillText(text, centerX, centerY);

    ctx.restore();
  },
};

const DonutChart2 = () => {
  const data = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        label: "First draft",
        data: [25, 40, 35],
        backgroundColor: ["#FF9528", "#FFC488", "#FFF0E1"],
        borderColor: ["#FF9528", "#FFC488", "#FFF0E1"],
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: [
      "Hedge Fund",
      "Venture Capital",
      "Institutional Investor",
      "Mutual Fund",
    ],
    colors: ["#FF9528", "#FFC488", "#FFF0E1"],
    datasets: [
      {
        label: "Final Allocation",
        data: [65, 13, 37],
        backgroundColor: ["#FF9528", "#FFC488", "#FFF0E1"],
        borderColor: ["#FF9528", "#FFC488", "#FFF0E1"],
        borderWidth: 1,
      },
    ],
  };

  const options1 = {
    plugins: {
      legend: {
        display: false,
      },
      centerTextPlugin: {
        text: "First Draft",
      },
    },
    cutout: "60%",
  };

  const options2 = {
    plugins: {
      legend: {
        display: false,
      },
      centerTextPlugin: {
        text: "Final Allocation",
      },
    },
    cutout: "60%",
  };

  useEffect(() => {
    ChartJS.register(centerTextPluginObject);
    return () => {
      ChartJS.unregister(centerTextPluginObject);
    };
  }, []);

  return (
    <div className="flex  flex-col w-full  h-max-[443px] h-auto border rounded-lg shadow-lg ">
      <div className="border-b border-lightGrey p-5 font-inter-bold text-base leading-7 text-left text-lightBlack">
        Distribution of Turnover Type
      </div>
      <div class="flex justify-between mx-2 mt-8 sm:flex-row items-center flex-col sm:flex">
        <div class="w-auto h-auto mx-4">
          <Doughnut data={data} options={options1} class="sm:mr-2" />
        </div>

        <img src={Icon} class="w-full h-auto md:rotate-0 rotate-90" />

        <div class="w-auto h-auto mx-4 ">
          <Doughnut data={data2} options={options2} class="sm:mr-2" />
        </div>
      </div>

      <div className="flex flex-wrap py-10 sm:flex-row flex-col justify-center sm:justify-center ms-3">
        {data.labels.map((label, index) => (
          <div key={index} className="flex px-6 sm:w-auto">
            <span
              className="w-3 h-3 rounded-full my-1 mx-5"
              style={{
                backgroundColor: data2.colors[index],
              }}
            ></span>
            <span className="text-sm font-inter text-steelBlue leading-5 tracking-normal text-left sm:text-xs md:text-sm lg:text-sm xl:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart2;
