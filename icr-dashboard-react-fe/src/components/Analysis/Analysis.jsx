import React from "react";
import DonutCharts from "../indiviualIpoView/DonutCharts";
import DonutCharts2 from "./DonutCharts2";
import Barchart from "./Barchart";

const Analysis = () => {
  return (
    <div>
      <div className="md:flex lg:flex-nowrap block gap-8 w-full">
        <DonutCharts />
        <DonutCharts2 />
      </div>

      <Barchart />
    </div>
  );
};

export default Analysis;
