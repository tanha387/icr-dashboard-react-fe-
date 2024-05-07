import React from "react";
import DonutCharts from "../indiviualIpoView/DonutCharts";
import Donutchart1 from "./Donutchart/Donutchart1";
import Barchart from "../AnalysisView/Barchart";

const AnalaysisView = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row flex-nowrap block gap-8 w-full">
        <div className="flex w-full md:w-auto lg:w-1/2">
          <Donutchart1 />
        </div>
        <div className="flex w-full md:w-auto lg:w-1/2 md:flex-row-reverse">
          <Donutchart1 />
        </div>
      </div>
      <Barchart />
    </div>
  );
};

export default AnalaysisView;
