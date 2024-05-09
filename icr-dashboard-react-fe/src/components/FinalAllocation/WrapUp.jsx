import React from "react";
import FinalAllocationTable from "./FinalAllocation";
import DonutChartFinalAllocation from "./DonutChartFinalAllocation";
import BarChart from "../AnalysisView/Barchart";
import BarChartAllocation from "./BarchartFinalAllocation";

const WrapUp = () => {
  return (
    <div className="w-full h-auto">
      <FinalAllocationTable />
      <div className="flex flex-wrap gap-4 mt-8 w-full md:flex-nowrap ">
        <div className="w-full 2xl:w-1/3">
          <DonutChartFinalAllocation />
        </div>
        <div className="w-full 2xl:w-2/3">
          <BarChartAllocation />
        </div>
      </div>
    </div>
  );
};

export default WrapUp;
