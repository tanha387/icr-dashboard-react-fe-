import React from "react";
import { icrIndiviualIpoBodyData } from "../../assets/data/constants";
import downArrow from "../../assets/images/Icons/greenIndicator.svg";

const FilterComponentIndivoiualIpo = ({ investorName }) => {
  const investorData = icrIndiviualIpoBodyData.find(
    (item) => item.investorDetails.investorName === investorName
  );

  if (!investorData) {
    return null;
  }

  const subcategories = investorData.investorDetails.subcategories;

  return (
    <div className="p-4 border-b">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        {subcategories.map((subcategory, subIndex) => (
          <div key={subIndex} className="flex flex-col">
            {Object.entries(subcategory).map(([key, value]) => (
              <p
                key={key}
                className="font-inter text-sm ms-10 text-lightBlack font-medium leading-6 tracking-tight text-left"
              >
                {value}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponentIndivoiualIpo;
