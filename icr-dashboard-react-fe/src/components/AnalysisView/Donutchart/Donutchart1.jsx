import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Icon from "../../../assets/images/Icons/Left.svg";
import {
  Donutchart1firstAllcoation,
  Donutchart2firstAllcoation,
} from "../../../assets/data/constants.js";

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
  const [details1, setDetails1] = useState([]);
  const [details2, setDetails2] = useState([]);

  useEffect(() => {
    try {
      setDetails1(Donutchart1firstAllcoation[0]?.details || []);
    } catch (error) {
      console.error("Error setting details1:", error);
    }

    try {
      setDetails2(Donutchart2firstAllcoation[0]?.details || []);
    } catch (error) {
      console.error("Error setting details2:", error);
    }
  }, []);

  const labels1 = details1.map((item) => item.slug);
  const values1 = details1.map((item) => item.value);
  const labels2 = details2.map((item) => item.slug);
  const values2 = details2.map((item) => item.value);
  console.log("Labels:", labels1);
  console.log("Values:", values1);

  const backgroundColor1 = ["#5388D8", "#F4BE37", "#FF9F40", "#0D2535"];

  const [savedColors, setSavedColors] = useState({});

  useEffect(() => {
    const initialColors = {};
    labels1.forEach((label, index) => {
      initialColors[label] = backgroundColor1[index % backgroundColor1.length];
    });
    setSavedColors(initialColors);
  }, [details1]);

  const data1 = {
    labels: labels1,
    datasets: [
      {
        label: "First draft",
        data: values1,
        backgroundColor: backgroundColor1,
        borderColor: backgroundColor1,
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

  const backgroundColor2 = generateData2();
  function generateData2() {
    console.log("labels2:", labels2);
    //console.log("savedColors:", savedColors);
    //console.log("backgroundColor1:", backgroundColor1);

    const backgroundColor2 = labels2.map((label, index) => {
      const savedColor = savedColors[label];
      if (savedColor) {
        return savedColor;
      } else {
        const colorToSave =
          index === 4
            ? backgroundColor1[0]
            : backgroundColor1[index % backgroundColor1.length];
        setSavedColors((prevState) => ({
          ...prevState,
          [label]: colorToSave,
        }));
        return colorToSave;
      }
    });

    // console.log("backgroundColor2:", backgroundColor2);
    return backgroundColor2;
  }

  const data2 = {
    labels: labels2,
    datasets: [
      {
        label: "Final Allocation",
        data: values2,
        backgroundColor: backgroundColor2,
        borderColor: backgroundColor2,
        borderWidth: 1,
      },
    ],
  };

  const unusedLabels = labels2.filter((label) => !savedColors[label]);
  const unusedColors = backgroundColor1.filter(
    (color) => !Object.values(savedColors).includes(color)
  );

  const combinedDatasets = unusedLabels.map((label, index) => {
    const color = unusedColors[index % unusedColors.length];
    return {
      label: label,
      color: color,
    };
  });

  return (
    <div className="flex flex-col w-full h-max-[443px] h-auto border rounded-lg shadow-lg ">
      <div className="border-b border-lightGrey p-5 font-inter-bold text-base leading-7 text-left text-lightBlack">
        Distribution of Investor Type
      </div>
      <div className="flex justify-between mx-2 mt-8 sm:flex-row items-center flex-col sm:flex">
        <div className="w-auto h-auto mx-4">
          <Doughnut data={data1} options={options1} className="sm:mr-2" />
        </div>

        <img src={Icon} className="w-full h-auto md:rotate-0 rotate-90" />

        <div className="w-auto h-auto mx-4 ">
          <Doughnut data={data2} options={options2} className="sm:mr-2" />
        </div>
      </div>
      <div className="flex flex-wrap py-10 sm:flex-row flex-col justify-center sm:justify-start ms-3">
        {Object.keys(savedColors).map((label, index) => (
          <div key={index} className="flex sm:w-auto">
            <span
              className="w-3 h-3 rounded-full my-1 mx-5"
              style={{
                backgroundColor: savedColors[label],
              }}
            ></span>
            <span className="text-sm font-inter text-steelBlue leading-5 tracking-normal text-left sm:text-xs md:text-sm lg:text-sm xl:text-sm">
              {label}
            </span>
          </div>
        ))}
        {combinedDatasets.map((dataset, index) => (
          <div key={index} className="flex sm:w-auto">
            <span
              className="w-3 h-3 rounded-full my-1 mx-5"
              style={{
                backgroundColor: dataset.color,
              }}
            ></span>
            <span className="text-sm font-inter text-steelBlue leading-5 tracking-normal text-left sm:text-xs md:text-sm lg:text-sm xl:text-sm">
              {dataset.label}
            </span>
            <span
              className="text-sm font-inter text-steelBlue leading-5 tracking-normal text-left sm:text-xs md:text-sm lg:text-sm xl:text-sm"
              style={{ marginLeft: "5px" }}
            >
              ({dataset.color})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart1;
