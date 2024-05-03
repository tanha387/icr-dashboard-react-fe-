import React from "react";
import DonutCharts from "../indiviualIpoView/DonutCharts";
import DonutCharts2 from "./DonutCharts2";
import Barchart from "./Barchart";

const Analysis = () => {
  return (
    <div>
      <div className="flex">
        <DonutCharts />
        <div className="w-8" /> {/* Adjust the width for the desired gap */}
        <DonutCharts2 />
      </div>

      <Barchart />
    </div>
  );
};

export default Analysis;
