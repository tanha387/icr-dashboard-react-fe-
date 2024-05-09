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

const DonutChart1 = () => {
  const data = {
    labels: [
      "Mutual Fund",
      "Hedge Fund",
      "Venture Capital",
      "Institutional Investor",
    ],
    datasets: [
      {
        label: "First draft",
        data: [30, 30, 7, 33],
        backgroundColor: ["#5388D8", "#F4BE37", "#FF9F40", "#0D2535"],
        borderColor: ["#5388D8", "#F4BE37", "#FF9F40", "#0D2535"],
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: [
      "Mutual Fund",
      "Hedge Fund",
      "Venture Capital",
      "Institutional Investor",
    ],
    colors: ["#F4BE37", "#FF9F40", "#0D2535", "#5388D8"],
    datasetsAll: [
      "Hedge Fund",
      "Venture Capital",
      "Institutional Investor",
      "Mutual Fund",
    ],
    datasets: [
      {
        label: "Final Allocation",
        data: [60, 10, 25, 30],
        backgroundColor: ["#5388D8", "#F4BE37", "#FF9F40", "#0D2535"],
        borderColor: ["#5388D8", "#F4BE37", "#FF9F40", "#0D2535"],
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
    <div className="flex flex-col w-full  h-max-[443px] h-auto border rounded-lg shadow-lg ">
      <div className="border-b border-lightGrey p-5 font-inter-bold text-base leading-7 text-left text-lightBlack">
        Distribution of Investor Type
      </div>
      <div className="flex justify-between mx-2 mt-8 sm:flex-row items-center flex-col sm:flex">
        <div className="w-auto h-auto mx-4">
          <Doughnut data={data} options={options1} className="sm:mr-2" />
        </div>

        <img src={Icon} className="w-full h-auto md:rotate-0 rotate-90" />

        <div className="w-auto h-auto mx-4 ">
          <Doughnut data={data2} options={options2} className="sm:mr-2" />
        </div>
      </div>

      <div className="flex flex-wrap py-10 sm:flex-row flex-col justify-center sm:justify-start ms-3">
        {data2.datasetsAll.map((label, index) => (
          <div key={index} className="flex sm:w-auto">
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

export default DonutChart1;
