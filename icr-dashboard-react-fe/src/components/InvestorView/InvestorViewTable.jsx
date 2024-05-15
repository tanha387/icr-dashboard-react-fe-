import React, { useState, useEffect } from "react";

import {
  InvestorHeadersData,
  InvestorIPOData,
} from "../../assets/data/constants.js";

import {
  formatValue,
  getCellColors,
  getRotationClass,
} from "../InvestorView/FilterInvestorComponents.jsx";
import icon from "../../assets/images/Icons/Up.svg";

const InvestorViewTable = () => {
  const [sortingCriteria, setSortingCriteria] = useState({
    sortBy: null,
    sortType: null,
  });

  const handleHeaderClick = (headerText) => {
    const newSortType =
      sortingCriteria[headerText]?.sortType === "desc" ? "asc" : "desc";

    setSortingCriteria({
      ...sortingCriteria,
      [headerText]: { sortBy: headerText, sortType: newSortType },
    });

    setTimeout(() => {
      console.log(
        `Network request triggered for sorting by ${headerText} in ${newSortType} order`
      );
    }, 500);
  };

  return (
    <div>
      <div className="flex w-full overflow-auto bg-white border border-1 border-neutral-200 mt-8 rounded-lg">
        <table class="w-full divide-y divide-gray-200">
          <caption className="font-inter-bold text-lg text-lightBlack leading-8 tracking-tighter text-left py-4 ps-6 border-b">
            IPO Allocations & Holding Behavior
          </caption>

          <thead className="w-full">
            <tr className="bg-grey2 ">
              {InvestorHeadersData.map((tableHeader, index) => (
                <th
                  key={index}
                  className={`px-4 py-2 whitespace-nowrap w-max text-center font-inter-bold text-xs font-semibold text-lightBlack ${
                    index === 0 ? "border-b border-lightGrey" : ""
                  }`}
                  onClick={() => handleHeaderClick(tableHeader.label)}
                >
                  <button className="flex items-center justify-start">
                    {tableHeader.label}
                    {tableHeader.icon && (
                      <img
                        src={tableHeader.icon}
                        alt="Sort Icon"
                        className={`w-[20px] h-[20px] object-contain transition-all 0.8s ease-in-out transform ${
                          sortingCriteria[tableHeader.label]?.sortType ===
                          "desc"
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {InvestorIPOData.map((rowData, rowIndex) => (
              <tr key={rowIndex}>
                <td className="px-4 py-2 whitespace-nowrap w-max text-left border-b border-r font-inter text-sm font-medium text-lightBlack">
                  {rowData.ticker}
                </td>
                <td className="px-4 py-2 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack">
                  {rowData.company}
                </td>
                <td className="px-4 py-2 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack">
                  {rowData.sector}
                </td>
                <td className="px-4 py-2 whitespace-nowrap w-max text-center font-inter text-sm font-medium text-lightBlack">
                  {rowData.cornerstone}
                </td>
                <td className="px-4 py-2 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack">
                  {rowData.pricing_Date}
                </td>
                <td className="px-4 py-1 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack">
                  ${formatValue(rowData.final_Deal_size)}
                </td>

                <td className="px-4 py-2 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack">
                  {rowData.allocation}
                </td>
                <td className="px-4 py-2 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack">
                  {formatValue(rowData.market_cap)}
                </td>
                <td className="px-4 py-2 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack">
                  {formatValue(rowData.shares_of_ipo)}
                </td>
                <td
                  className={` px-4 py-1 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack`}
                >
                  <span
                    className={`inline-block px-3 ${
                      getCellColors(rowData.Days90).backgroundColor
                    } ${getCellColors(rowData.Days90).textColor}`}
                  >
                    <div className="flex justify-center items-center py-1 rounded-md">
                      <img
                        src={getCellColors(rowData.Days90).arrowImage}
                        alt="Arrow"
                        className={`w-4 h-4 mr-1 ${getRotationClass(
                          rowData.Days90,
                          getCellColors(rowData.Days90).textColor
                        )}`}
                      />
                      {rowData.Days360}
                    </div>
                  </span>
                </td>
                <td
                  className={` px-4 py-1 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack`}
                >
                  <span
                    className={`inline-block px-3 ${
                      getCellColors(rowData.Days180).backgroundColor
                    } ${getCellColors(rowData.Days180).textColor}`}
                  >
                    <div className="flex justify-center items-center py-1 rounded-md">
                      <img
                        src={getCellColors(rowData.Days180).arrowImage}
                        alt="Arrow"
                        className={`w-4 h-4 mr-1 ${getRotationClass(
                          rowData.Days180,
                          getCellColors(rowData.Days180).textColor
                        )}`}
                      />
                      {rowData.Days180}
                    </div>
                  </span>
                </td>
                <td
                  className={` px-4 py-1 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack`}
                >
                  <span
                    className={`inline-block px-3 ${
                      getCellColors(rowData.Days270).backgroundColor
                    } ${getCellColors(rowData.Days270).textColor}`}
                  >
                    <div className="flex justify-center items-center py-1 rounded-md">
                      <img
                        src={getCellColors(rowData.Days270).arrowImage}
                        alt="Arrow"
                        className={`w-4 h-4 mr-1 ${getRotationClass(
                          rowData.Days270,
                          getCellColors(rowData.Days270).textColor
                        )}`}
                      />
                      {rowData.Days270}
                    </div>
                  </span>
                </td>

                <td
                  className={` px-4 py-1 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack`}
                >
                  <span
                    className={`inline-block px-3 ${
                      getCellColors(rowData.Days360).backgroundColor
                    } ${getCellColors(rowData.Days360).textColor}`}
                  >
                    <div className="flex justify-center items-center py-1 rounded-md">
                      <img
                        src={getCellColors(rowData.Days360).arrowImage}
                        alt="Arrow"
                        className={`w-4 h-4 mr-1 ${getRotationClass(
                          rowData.Days360,
                          getCellColors(rowData.Days360).textColor
                        )}`}
                      />
                      {rowData.Days360}
                    </div>
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap w-max text-center font-inter text-sm font-medium text-lightBlack">
                  {rowData.id}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestorViewTable;
