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

  const getCellColors = (value) => {
    let backgroundColor, textColor, arrowImage;
    if (value < 0) {
      backgroundColor = "bg-lightRed rounded-md";
      textColor = "text-deepRed";
      arrowImage = downArrow;
    } else {
      backgroundColor = "bg-lightGreen rounded-md";
      textColor = "text-green1";
      arrowImage = downArrow;
    }
    return { backgroundColor, textColor, arrowImage };
  };

  const getRotationClass = (value) => {
    if (value > 0) {
      return "rotate-180";
    } else {
      return "";
    }
  };

  const subcategories = investorData.investorDetails.subcategories;
  const cellStyles = "px-4 py-16 sm:px-6 sm:py-2 whitespace-nowrap";

  return (
    <table className="table-auto">
      <tbody>
        {subcategories.map((subcategory, subIndex) => (
          <tr key={subIndex}>
            <td className="py-2 font-inter whitespace-nowrap w-max text-left text-sm font-medium text-black">
              {subcategory.investorName}
            </td>
            <td className="py-2">{/* Provide content */}</td>
            <td className="py-2">{/* Provide content */}</td>
            <td className=" py-2">{/* Provide content */}</td>
            <td className="py-2 font-inter whitespace-nowrap w-max text-left text-sm font-medium text-black">
              {subcategory.meetings}
            </td>
            <td className="py-2 font-inter whitespace-nowrap w-max text-left text-sm font-medium text-black">
              {subcategory.meetings}
            </td>
            <td className="py-2 font-inter whitespace-nowrap w-max text-left text-sm font-medium text-black">
              {subcategory.meetings}
            </td>
            <td className=" py-2 font-inter whitespace-nowrap w-max text-left text-sm font-medium text-black">
              {subcategory.meetings}
            </td>
            <td className=" py-2 font-inter whitespace-nowrap w-max text-left text-sm font-medium text-black">
              {subcategory.meetings}
            </td>
            <td className=" py-2 font-inter whitespace-nowrap w-max text-left text-sm font-medium text-black">
              {subcategory.meetings}
            </td>
            <td>
              <span
                className={`inline-block px-3 ${
                  getCellColors(subcategory.percentOfChange).backgroundColor
                } ${getCellColors(subcategory.percentOfChange).textColor}`}
              >
                <div className="flex justify-center items-center py-1 rounded-md">
                  <img
                    src={getCellColors(subcategory.percentOfChange).arrowImage}
                    alt="Arrow"
                    className={`w-4 h-4 mr-1 ${getRotationClass(
                      subcategory.percentOfChange
                    )}`}
                  />
                  {subcategory.percentOfAllocation} %
                </div>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FilterComponentIndivoiualIpo;
