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

  return (
    <div className="p-4 border-b">
      {investorData.investorDetails.subcategories.map(
        (subcategory, subIndex) => (
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
        )
      )}
    </div>
  );
};

export default FilterComponentIndivoiualIpo;
