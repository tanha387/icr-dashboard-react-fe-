import React from "react";

import Donutchart1 from "./Donutchart/Donutchart1";
import Barchart from "../AnalysisView/Barchart";
import DonutChart2 from "./Donutchart/Donuchart2";
import BarChart_option from "./Barchart_optional";
import BarChart2 from "./Barchart_optional";

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
      <div>
        <Barchart className="mt-20" />
      </div>
      <div>
        <BarChart2 className="mt-20" />
      </div>
    </div>
  );
};

export default AnalaysisView;
