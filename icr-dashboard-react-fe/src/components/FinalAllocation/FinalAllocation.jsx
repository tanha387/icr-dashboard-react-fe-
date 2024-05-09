import React, { useState, useEffect } from "react";
import {
  icrIndiviualIpoBodyData,
  finalAllocationHeadersData,
} from "../../assets/data/constants.js";
import FilterComponentIndivoiualIpo from "../indiviualIpoView/FilterComponentIndiviualIpo.jsx";
import icon from "../../assets/images/Icons/Up.svg";
import downArrow from "../../assets/images/Icons/minus.svg";
import thick from "../../assets/images/Icons/Icon Container.svg";
import plus from "../../assets/images/Icons/Pluss.svg";
import LoadingComponent from "../LoadingComponent.jsx";
import AnalaysisView from "../AnalysisView/AnalaysisView.jsx";

const FinalAllocationTable = () => {
  const [sortingCriteria, setSortingCriteria] = useState({
    sortBy: null,
    sortType: null,
  });
  const [expandedRow, setExpandedRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setData(icrIndiviualIpoBodyData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  };

  const toggleAccordion = (index) => {
    if (expandedRow === index) {
      setExpandedRow(null);
    } else {
      setExpandedRow(index);
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
      arrowImage = icon;
    } else {
      backgroundColor = "bg-lightGreen rounded-md ";
      textColor = "text-green1";
      arrowImage = icon;
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
  const cellStyles = "px-4 py-16 sm:px-6 sm:py-2 whitespace-nowrap";
  const cellStyless = "px-4 py-4 sm:px-6 sm:py-2 whitespace-nowrap";

  return (
    <div className="flex w-full h-auto  bg-white border border-1 border-neutral-200 mt-8 rounded-lg">
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="flex w-full items-center">
          <div className="overflow-auto h-80 w-full">
            <div className="flex justify-between items-center">
              {/* Caption */}
              <caption className="font-inter-bold text-lg text-lightBlack leading-8 tracking-tighter text-left py-4 ps-6">
                Investors(89)
              </caption>
              {/* Dropdown */}
              <div>
                <button
                  id="dropdownDividerButton"
                  data-dropdown-toggle="dropdownDivider"
                  className="text-whitee focus:ring-blue-300 font-inter rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center border me-4"
                  type="button"
                  onClick={toggleDropdown}
                >
                  <h2 className="text-steelBlue font-inter-bold ">
                    Sort By
                    <span className="font-inter-bold text-black ps-1">
                      Allocation
                    </span>
                  </h2>
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div
                  id="dropdownDivider"
                  className={`${
                    dropdownVisible ? "" : "hidden"
                  } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDividerButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <table className="w-full  bg-slate-400 divide-y divide-gray-200">
              <thead className="w-full">
                <tr className="bg-grey2 ">
                  {finalAllocationHeadersData.map((tableHeader, index) => (
                    <th
                      key={index}
                      className={`px-4 py-2 whitespace-nowrap w-max text-center  font-inter-bold text-xs font-semibold text-lightBlack  ${
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
              <tbody className="bg-white divide-y divide-gray-200">
                {icrIndiviualIpoBodyData.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <tr className="border text-black my-16 font-inter text-sm font-semibold leading-6 text-left">
                      <td
                        className="border-b px-6 py-1 whitespace-nowrap text-left font-inter-bold text-sm  text-lightBlack"
                        onClick={() => toggleAccordion(index)}
                      >
                        <img
                          src={expandedRow === index ? downArrow : plus}
                          alt="sort icon"
                          className="w-4 h-4 inline-block ml-1"
                        />
                        <span className="font-inter px-4 py-1 whitespace-nowrap w-max text-left text-sm font-medium text-black">
                          {item.investorDetails.investorName}
                        </span>
                      </td>
                      <td
                        className={` border-b ps-4 py-1 whitespace-nowrap w-max  font-inter text-sm font-medium text-lightBlack`}
                      >
                        {item.investorDetails.type}
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
                      <td className="border-b whitespace-nowrap text-center font-inter text-sm font-medium text-lightBlack ">
                        <img src={thick} className="h-9" />
                      </td>
                      <td
                        className={`${cellStyles} border-b px-4 py-1 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack`}
                      >
                        {formatValue(item.investorDetails.indication)}
                      </td>

                      <td
                        className={`${cellStyles} border-b px-4 py-1 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack`}
                      >
                        {formatValue(item.investorDetails.firstDraftAllocation)}
                      </td>
                      <td
                        className={`${cellStyles} border-b px-4 py-1 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack`}
                      >
                        {formatValue(item.investorDetails.allocation)}
                      </td>
                      <td
                        className={`${cellStyles} border-b px-4 py-1 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack`}
                      >
                        {item.investorDetails.percentOfAllocation}%
                      </td>
                      <td
                        className={`${cellStyles} border-b px-4 py-1 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack`}
                      >
                        $ {formatValue(item.investorDetails.finalAllocation)}
                      </td>

                      <td
                        className={`${cellStyles} border-b  py-1 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack`}
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
                          <div className="flex justify-center items-center py-1 rounded-md">
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
                            {item.investorDetails.percentOfChange} %
                          </div>
                        </span>
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
                          <div className="flex justify-center items-center py-1 rounded-md">
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
                            {item.investorDetails.days} %
                          </div>
                        </span>
                      </td>
                    </tr>
                    {/* Expandable content */}
                    {expandedRow === index && (
                      <tr>
                        <td colSpan="11">
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
        </div>
      )}
    </div>
  );
};

export default FinalAllocationTable;
