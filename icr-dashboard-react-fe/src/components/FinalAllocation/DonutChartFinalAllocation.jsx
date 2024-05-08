import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChartFinalAllocation = () => {
  const data = {
    labels: [
      "Hedge Fund",
      "Venture Capital",
      "Institutional Investor",
      "Mutual Fund",
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
      "Hedge Fund",
      "Venture Capital",
      "Institutional Investor",
      "Mutual Fund",
    ],
    colors: ["#F4BE37", "#FF9F40", "#0D2535", "#5388D8"],
    numbers: [46, 55, 77, 88], // Assuming these are the numbers associated with each label
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

  return (
    <div className="flex flex-col w-full  min-h-[431px] h-auto  mt-4 border rounded-lg shadow-lg bg-white">
      <div className="border-b border-lightGrey p-5 font-inter-bold text-base leading-7 text-left text-lightBlack">
        Distribution of Investor Type
      </div>
      <div class="flex mx-2 mt-8 sm:flex-row items-center flex-col sm:flex">
        <div class="max-w-[270px]  w-auto max-h-[270px]">
          <Doughnut data={data} options={options1} class="sm:mr-2" />
        </div>
        <div className="py-10 sm:flex-row flex-row justify-center sm:justify-start ms-3 ">
          {data.labels.map((label, index) => (
            <div key={index} className="flex sm:w-auto mt-4">
              <span
                className="w-3 h-3 rounded-full my-1 mx-5"
                style={{
                  backgroundColor: data2.colors[index],
                }}
              ></span>
              <span className="text-sm font-inter text-steelBlue leading-5 tracking-normal text-left sm:text-xs md:text-sm lg:text-sm xl:text-sm">
                {label}{" "}
                <p className="font-inter-bold text-black">
                  {data2.numbers[index]}
                </p>{" "}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutChartFinalAllocation;
