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
  const headers = [
    "Investor Name",
    "Type",
    "Engagement rating",
    "Cornerstone",
    "Indication",
    "1st Draft Allocation",
    "Allocated",
    "% of Allocation",
    "Allocation value",
    "+90 days",
    "+180 days",
  ];
  const formatValue = (value) => {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(1)}B`;
    } else if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    } else {
      return value.toString();
    }
  };

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

  return (
    <table className="table-auto w-full border-b">
      <thead className="bg-transparent w-96">
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="px-6  w-full whitespace-nowrap text-left font-inter-bold text-xs font-semibold text-white"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="border-b">
        {subcategories.map((subcategory, subIndex) => (
          <React.Fragment key={subIndex}>
            <tr className="border text-black my-16  font-inter text-sm font-semibold leading-6 text-left border-b">
              <td className="ps-8 sm:px-6 sm:py-2 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack ms-7">
                {subcategory.investorName}
              </td>

              <td className="px-8 sm:px-6 sm:py-2 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack">
                {/* Provide content */}
              </td>
              <td className="sm:px-6 sm:py-2 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack"></td>
              <td className="sm:px-6 sm:py-2 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack"></td>

              <td className=" sm:px-6 sm:py-2 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack ">
                {formatValue(subcategory.indication)}
              </td>
              <td className="sm:px-6 sm:py-2 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack">
                {formatValue(subcategory.firstDraftAllocation)}
              </td>
              <td className="sm:px-6 sm:py-2 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack">
                {formatValue(subcategory.firstDraftAllocation)}
              </td>
              <td className="sm:px-6 sm:py-2 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack">
                {subcategory.percentOfAllocation}%
              </td>
              <td className="sm:px-6 sm:py-2 whitespace-nowrap w-max text-center font-inter text-sm font-medium text-lightBlack">
                ${formatValue(subcategory.firstDraftAllocation)}
              </td>
              <td className="px-4 py-4 sm:px-6 sm:py-2 whitespace-nowrap w-max  font-inter text-sm font-medium text-lightBlack">
                <span
                  className={`inline-block px-5 ${
                    getCellColors(subcategory.percentOfChange).backgroundColor
                  } ${getCellColors(subcategory.percentOfChange).textColor}`}
                >
                  <div className="flex justify-center items-center py-1 rounded-md">
                    <img
                      src={
                        getCellColors(subcategory.percentOfChange).arrowImage
                      }
                      alt="Arrow"
                      className={`w-4 h-4 mr-1 ${getRotationClass(
                        subcategory.percentOfChange
                      )}`}
                    />
                    {subcategory.percentOfAllocation} %
                  </div>
                </span>
              </td>
              <td className="px-4 py-4 sm:px-6 sm:py-2 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack">
                <span
                  className={`inline-block px-5 ${
                    getCellColors(subcategory.percentOfChange).backgroundColor
                  } ${getCellColors(subcategory.percentOfChange).textColor}`}
                >
                  <div className="flex justify-center items-center py-1 rounded-md">
                    <img
                      src={
                        getCellColors(subcategory.percentOfChange).arrowImage
                      }
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
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default FilterComponentIndivoiualIpo;
