import React from "react";
import DonutCharts from "./DonutCharts";
import SolarPhotovoltaicsChart from "../Analysis/SolarPhotovoltaicsChart";

const Analysis = () => {
  return (
    <div>
      <div className="flex">
        <DonutCharts />
        <div className="w-8" /> {/* Adjust the width for the desired gap */}
        <DonutCharts className="ps-4" />
      </div>
    </div>
  );
};

export default Analysis;
