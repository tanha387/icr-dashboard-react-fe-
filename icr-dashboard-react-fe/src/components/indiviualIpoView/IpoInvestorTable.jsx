import React, { useState, useEffect } from "react";
import {
  icrIndiviualIpoBodyData,
  icrIndiviualIpoTableHeadersData,
} from "../../assets/data/constants";

import FilterComponentIndivoiualIpo from "../../components/indiviualIpoView/FilterComponentIndiviualIpo.jsx";

import icon from "../../assets/images/Icons/Icon.svg";
import downArrow from "../../assets/images/Icons/minus.svg";
import LoadingComponent from "../../components/LoadingComponent.jsx";

const IndiviualIpoviewTable = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleAccordion = (index) => {
    if (expandedRow === index) {
      setExpandedRow(null);
    } else {
      setExpandedRow(index);
    }
  };

  const getTurnoverColor = (turnover) => {
    switch (turnover) {
      case "Low":
        return "bg-orange2 m-4 px-2 rounded-md";
      case "Medium":
        return "bg-orange3 m-4 px-2 rounded-md";
      case "High":
        return "bg-orange4 m-4 px-2 rounded-md";
      default:
        return "";
    }
  };

  const calculateWidth = (value) => {
    const clampedValue = Math.min(Math.max(value, 0), 100);
    return `${clampedValue}%`;
  };

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
      backgroundColor = "bg-lightRed rounded-md  ";
      textColor = "text-deepRed";
      arrowImage = downArrow;
    } else {
      backgroundColor = "bg-lightGreen rounded-md ";
      textColor = "text-green1";
      arrowImage = downArrow;
    }
    return { backgroundColor, textColor, arrowImage };
  };

  const getRotationClass = (value, textColor) => {
    if (value > 0) {
      return "rotate-180";
    } else {
      return "";
    }
  };

  const cellStyles = "px-4 py-16 sm:px-6 sm:py-2 whitespace-nowrap";
  const cellStyless = "px-4 py-4 sm:px-6 sm:py-2 whitespace-nowrap";

  return (
    <div className="flex w-full bg-white border border-1 border-neutral-200 mt-8 rounded-lg">
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="flex w-full items-center">
          <table className="w-full bg-slate-400 divide-y divide-gray-200">
            <caption className="font-inter-bold text-lg text-lightBlack leading-8 tracking-tighter text-left p-5">
              Investors
            </caption>
            <thead className="w-full">
              <tr className="bg-grey2">
                {icrIndiviualIpoTableHeadersData.map((tableHeader, index) => (
                  <th
                    key={index}
                    className={`px-4 py-2 whitespace-nowrap w-max text-left font-inter-bold text-xs font-semibold text-lightBlack  ${
                      index === 0 ? " border-b border-lightGrey" : ""
                    }`}
                    onClick={() => handleHeaderClick(tableHeader.value)}
                  >
                    <button className="flex items-center justify-start">
                      {tableHeader?.label}
                      {tableHeader.icon && (
                        <img
                          src={tableHeader.icon}
                          alt="Sort Icon"
                          className={`w-[20
                            \
                            px] h-[20px] object-contain transition-all 0.8s ease-in-out`}
                        />
                      )}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {icrIndiviualIpoBodyData.map((item, index) => (
                <React.Fragment key={item.id}>
                  <tr className="border text-black my-16 font-inter text-sm font-semibold leading-6 text-left">
                    <td
                      className="border-b px-4 py-1 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack"
                      onClick={() => toggleAccordion(index)}
                    >
                      <img
                        src={expandedRow === index ? downArrow : icon}
                        alt="sort icon"
                        className="w-4 h-4 inline-block ml-1"
                      />

                      <span className="font-inter px-4 py-1 whitespace-nowrap w-max text-left text-sm font-medium text-black">
                        {item.investorDetails.investorName}
                      </span>
                    </td>

                    <td
                      className={`${cellStyles} border-b pe-3 py-1 whitespace-nowrap w-max  font-inter text-sm font-medium text-lightBlack`}
                    >
                      {item.investorDetails.type}
                    </td>
                    <td className="border-b whitespace-nowrap text-left font-inter text-sm font-medium text-lightBlack ">
                      <span
                        className={`py-1 ${getTurnoverColor(
                          item.investorDetails.turnover
                        )} `}
                      >
                        {item.investorDetails.turnover}
                      </span>
                    </td>
                    <td
                      className={`${cellStyless} border-b px-4 py-1 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack`}
                    >
                      <div className="mb-1 text-sm dark:text-white font-inter">
                        {item.investorDetails.engagementRating}
                      </div>
                      <div className="w-full bg-gray-200 rounded-full mb-2 dark:bg-white-700">
                        <div
                          className="bg-progressBlue h-[4px] w-[121px] rounded-full dark:bg-white-500"
                          style={{
                            width: calculateWidth(
                              item.investorDetails.engagementRating
                            ),
                          }}
                        ></div>
                      </div>
                    </td>

                    <td
                      className={`${cellStyles} border-b px-4 py-1 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack`}
                    >
                      {item.investorDetails.meetings}
                    </td>
                    <td
                      className={`${cellStyles} border-b px-4 py-1 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack`}
                    >
                      {formatValue(item.investorDetails.firstDraftAllocation)}
                    </td>
                    <td
                      className={`${cellStyles} border-b px-4 py-1 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack`}
                    >
                      {formatValue(item.investorDetails.finalAllocation)}
                    </td>
                    <td
                      className={`${cellStyles} border-b px-4 py-1 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack`}
                    >
                      {item.investorDetails.percentOfAllocation}%
                    </td>
                    <td
                      className={`${cellStyles} border-b px-4 py-1 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack`}
                    >
                      <span
                        className={`inline-block px-3 ${
                          getCellColors(item.investorDetails.percentOfChange)
                            .backgroundColor
                        } ${
                          getCellColors(item.investorDetails.percentOfChange)
                            .textColor
                        }`}
                      >
                        <div className="flex justify-center items-center gap-1 px-2 py-1 rounded-md">
                          <img
                            src={
                              getCellColors(
                                item.investorDetails.percentOfChange
                              ).arrowImage
                            }
                            alt="Arrow"
                            className={`w-4 h-4 mr-1 ${getRotationClass(
                              item.investorDetails.percentOfChange,
                              getCellColors(
                                item.investorDetails.percentOfChange
                              ).textColor
                            )}`}
                          />
                          {item.investorDetails.percentOfChange}
                        </div>
                      </span>
                    </td>
                  </tr>
                  {/* Expandable content */}
                  {expandedRow === index && (
                    <tr>
                      <td colSpan="9">
                        <FilterComponentIndivoiualIpo
                          investorName={item.investorDetails.investorName}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default IndiviualIpoviewTable;
