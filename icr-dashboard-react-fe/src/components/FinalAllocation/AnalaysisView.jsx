import React from "react";
import DonutCharts from "../indiviualIpoView/unknown";
import Donutchart1 from "./Donutchart/Donutchart1";
import Barchart from "../AnalysisView/Barchart";
import DonutChart2 from "./Donutchart/Donuchart2";

const AnalaysisView = () => {
  return (
    <div>
      <div
        className="flex flex-wrap 2xl:flex-nowrap  gap-8 w-full
"
      >
        <div className="flex w-full md:w-full items-center ">
          <Donutchart1 />
        </div>
        <div className="flex w-full md:w-full ">
          <DonutChart2 />
        </div>
      </div>
      <Barchart />
    </div>
  );
};

export default AnalaysisView;
