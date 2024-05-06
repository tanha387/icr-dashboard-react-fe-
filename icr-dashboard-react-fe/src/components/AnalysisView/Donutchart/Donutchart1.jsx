import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Icon from "../../../assets/images/Icons/Left.svg";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart1 = () => {
  const data = {
    labels: [
      "Hedge Fund",
      "Venture Capital",
      "Institutional Investor",
      "Mutual Fund",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [30, 30, 30, 10],
        backgroundColor: ["#5388D8", "#0D2535", "#F4BE37", "#FF9F40"],
        borderColor: ["#5388D8", "#0D2535", "#F4BE37", "#FF9F40"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // hide default legend
      },
      doughnutLabel: {
        labels: [
          {
            text: "First Draft",
            font: {
              size: "20",
              weight: "bold",
            },
          },
        ],
      },
    },
    cutout: "60%", // adjust this value to change doughnut thickness
  };

  // Custom plugin to draw center text
  const centerTextPlugin = {
    id: "centerTextPlugin",
    afterDraw: (chart) => {
      const ctx = chart.ctx;
      const canvas = chart.canvas;

      const centerText = "First Draft";

      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#000"; // Color of the text

      // Draw text in the center
      ctx.fillText(centerText, canvas.width / 2, canvas.height / 2);

      ctx.restore();
    },
  };

  useEffect(() => {
    ChartJS.register(centerTextPlugin);
  }, []);

  return (
    <div className="flex flex-col w-[704px] h-[443px] border ">
      <div className="border-b border-lightGrey p-5 font-inter-bold text-base leading-7 text-left text-lightBlack">
        Distribution of Investor Type
      </div>
      <div className="flex justify-between mx-4 mt-5">
        <div className="w-[270px] h-[270px] ">
          <Doughnut data={data} options={options} />
        </div>
        <div className="content-center">
          <img src={Icon} className="w-24 h-9" />
        </div>
        <div className="w-[270px] h-[270px]">
          <Doughnut data={data} options={options} />
        </div>
      </div>

      <div className="flex mt-8 items-center ms-5">
        {data.labels.map((label, index) => (
          <div key={index} className="flex  text-xs">
            <span
              className="w-3 h-3 rounded-full my-3 mx-5 items-center "
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
              }}
            ></span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart1;
