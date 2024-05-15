import React, { useState, useEffect } from "react";
import {
  icrIndiviualIpoBodyData,
  finalAllocationHeadersData,
  investorHeadersData,
} from "../../assets/data/constants.js";
import FilterComponentIndivoiualIpo from "../indiviualIpoView/FilterComponentIndiviualIpo.jsx";
import icon from "../../assets/images/Icons/Up.svg";
import downArrow from "../../assets/images/Icons/minus.svg";
import thick from "../../assets/images/Icons/Icon Container.svg";
import plus from "../../assets/images/Icons/Pluss.svg";
import LoadingComponent from "../LoadingComponent.jsx";
import AnalaysisView from "../AnalysisView/AnalaysisView.jsx";
import IndicationInvestor from "../InvestorIPOParticipation/indicationInvestor.jsx";
import {
  formatValue,
  getCellColors,
  getRotationClass,
  getTurnoverColor,
  getTurnoverColorFocus,
} from "../../components/InvestorView/FilterInvestorComponents.jsx";

const InvestorIPOTable = () => {
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
          <div className="overflow-auto  w-full">
            <div className="flex justify-between items-center mt-6 ms-2 ">
              {/* Dropdown */}
              <IndicationInvestor />

              {/* Dropdown */}
              <div className="me-5">
                <button
                  id="dropdownDividerButton"
                  data-dropdown-toggle="dropdownDivider"
                  className="text-whitee font-inter rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center me-4"
                  type="button"
                  onClick={toggleDropdown}
                >
                  <svg
                    className="w-4 h-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>

                  <h2 className="text-steelBlue font-inter-bold ms-2 ">
                    Search...
                  </h2>
                </button>
              </div>
            </div>

            <div className="border-b border-gray-200 w-full mt-5"></div>
            <div className="flex justify-between">
              <p className="font-inter text-xs text-neutralBlue mt-5 ms-5">
                116 Results
              </p>
              <p className="font-inter text-sm text-neutralBlue mt-5 me-10">
                Page 1-14
              </p>
            </div>

            <table className="w-full  bg-slate-400 divide-y divide-gray-200  mt-8">
              <thead className="w-full">
                <tr className="bg-grey2 ">
                  {investorHeadersData.map((tableHeader, index) => (
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
                      <td className="border-b whitespace-nowrap text-left font-inter text-sm font-medium text-lightBlack ">
                        <span
                          className={`py-1 ${getTurnoverColor(
                            item.investorDetails.turnover
                          )} `}
                        >
                          {item.investorDetails.turnover}
                        </span>
                      </td>
                      <td className="border-b whitespace-nowrap text-left font-inter text-sm font-medium text-lightBlack ">
                        <span
                          className={`py-1 ${getTurnoverColorFocus(
                            item.investorDetails.focus
                          )} `}
                        >
                          {item.investorDetails.focus}
                        </span>
                      </td>

                      <td
                        className={`${cellStyles} border-b px-4 py-1 whitespace-nowrap w-max text-right font-inter text-sm font-medium text-lightBlack`}
                      >
                        {formatValue(item.investorDetails.firstDraftAllocation)}
                      </td>
                      <td
                        className={`${cellStyles} border-b ps-8 py-1 whitespace-nowrap w-max text-center font-inter text-sm font-medium text-lightBlack`}
                      >
                        $ {formatValue(item.investorDetails.allocation)}
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

export default InvestorIPOTable;
