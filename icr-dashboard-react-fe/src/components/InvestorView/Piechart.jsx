import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  label: [
    "Technology",
    "Healthcare",
    "Financial Services",
    "Real Estate",
    "Health",
  ],
  datasets: [
    {
      data: [36, 5, 29, 32, 2],
      backgroundColor: ["#F4BE37", "#9939AC", "#FF9F40", "#5388D8", "#0D2535"],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  legend: false, // Hide legend
  // Add your other options here
};

const PieChart = () => (
  <div className="w-full flex flex-col overflow-hidden border border-lightGrey rounded-lg shadow-lg bg-white mt-4">
    <div className="flex justify-start items-center border-b border-lightGrey w-full">
      <h3 className="py-4 px-6 font-inter-bold font-semibold text-base text-lightBlack">
        Allocation By selector
      </h3>
    </div>

    <div className="flex mt-9 mx-7">
      {/* Render the PieChart */}
      <div style={{ width: "270px", height: "270px" }}>
        <Pie data={data} options={options} />
      </div>

      {/* Render labels and associated numbers */}
      <div className="flex flex-col ml-4 ">
        {data.label.map((labels, index) => (
          <div key={index} className="flex items-center mt-5">
            <span
              className="w-3 h-3 rounded-full  mx-2"
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
              }}
            ></span>
            <span className="text-sm font-inter text-steelBlue leading-5 tracking-normal text-left">
              {labels}:{" "}
              <p className="font-inter-bold text-black">
                ${data.datasets[0].data[index]}billon
              </p>
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PieChart;
