import React, { useState } from "react";
import "react-input-range/lib/css/index.css";
import greenIndicator from "../../assets/images/Icons/greenIndicator.svg";
import Positive from "../../assets/images/Icons/Positive.svg";
import pxClose from "../../assets/images/Icons/pxClose.svg";
import { icrUsIpoTableHeadersData } from "../../assets/data/constants.js";
import LoadingComponent from "../LoadingComponent.jsx";
import PxModal from "./PxModal.jsx";
import "../../styles/AllUsIpo.css";

const IpoTableComponent = ({
  icrIpoData,
  handlePxChart,
  sortingCriteria,
  handleHeaderClick,
  handleRowClick,
  tableRef,
  tableLoading,
  setTableLoading,
}) => {
  const [activeId, setActiveId] = useState(null);
  const [modalPosition, setModalPosition] = useState({});

  // Function to handle opening modal and setting its position
  const handleOpenModal = (e, ipoId) => {
    e.stopPropagation();
    if (modalPosition.top !== undefined) {
      handleCloseModal();
      setActiveId(null);
      return;
    }
    handlePxChart(ipoId);
    setActiveId(ipoId);
    const rect = e.target.getBoundingClientRect();
    // console.log(rect);
    setModalPosition({
      top: `${rect.top}px`,
      left: `${rect.right}px`,
    });
  };

  // Function to close modal
  const handleCloseModal = () => {
    setModalPosition({});
  };
  return (
    <div className="flex w-full  items-center justify-start overflow-hidden">
      <div className="flex w-full items-center overflow-x-auto cursor-pointer scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-500 scrollbar-track-gray-100">
        <table className="fixed-table w-full" ref={tableRef}>
          <thead className="w-full">
            <tr className="bg-grey2">
              {icrUsIpoTableHeadersData.map((tableHeader, index) => (
                <th
                  key={index}
                  className={`px-4 py-2 whitespace-nowrap w-max text-left font-inter-bold text-xs font-semibold text-lightBlack ${
                    index === 0 ? "border-r border-b border-lightGrey" : ""
                  }`}
                  onClick={() => handleHeaderClick(tableHeader.value)}
                >
                  <button className="flex items-center justify-start">
                    {tableHeader?.label}
                    {tableHeader.icon && (
                      <img
                        src={tableHeader.icon}
                        alt="Sort Icon"
                        className={`w-[20px] h-[20px] object-contain transition-all 0.8s ease-in-out`}
                      />
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <>
            {tableLoading ? (
              <tbody>
                <tr>
                  <td></td>
                  <td className="tableLoadingPosition">
                    <LoadingComponent />
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {icrIpoData?.map((ipo, index) => (
                  <tr
                    onClick={() => handleRowClick(ipo?.id)}
                    key={index}
                    className=""
                  >
                    {icrUsIpoTableHeadersData?.map((tableHeader, index) => (
                      <td
                        key={index}
                        className="px-4 py-1 whitespace-nowrap w-max text-left font-inter text-sm font-medium text-lightBlack"
                      >
                        {tableHeader.value === "id" ? (
                          // <button onClick={(e) => {
                          //     e.stopPropagation();
                          //     handlePxChart(ipo?.id)
                          // }}>
                          //     <img src={Positive} alt='Plus Icon' className='w-[16px] h-[16px] object-contain' />
                          // </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePxChart(ipo?.id);
                              handleOpenModal(e, ipo?.id);
                            }}
                          >
                            {activeId === ipo?.id ? (
                              <img
                                src={pxClose}
                                alt="Close Icon"
                                className="w-[16px] h-[16px] object-contain"
                              />
                            ) : (
                              <img
                                src={Positive}
                                alt="Plus Icon"
                                className="w-[16px] h-[16px] object-contain"
                              />
                            )}
                          </button>
                        ) : tableHeader.value === "Days90Plus" ? (
                          // Check if Days90Plus value is greater than 0
                          ipo?.details[tableHeader.value] > 0 ? (
                            // If greater than 0, add "hi" prefix
                            <div className="flex justify-center items-center gap-1 px-4 py-1 bg-lightGreen rounded-md">
                              <img
                                src={greenIndicator}
                                alt="Green Indicator Icon"
                                className="w-[16px] h-[16px] object-contain"
                              />
                              <span className="font-inter text-sm font-medium text-green1">
                                {ipo.details[tableHeader?.value]}%
                              </span>
                            </div>
                          ) : (
                            // If not greater than 0, add "no" prefix
                            <div className="flex justify-center items-center gap-1 px-4 py-1 bg-lightRed rounded-md">
                              <img
                                src={greenIndicator}
                                alt="Green Indicator Icon"
                                className="w-[16px] h-[16px] object-contain rotate-180"
                              />
                              <span className="font-inter text-sm font-medium text-green1">
                                {ipo.details[tableHeader?.value]}%
                              </span>
                            </div>
                          )
                        ) : tableHeader.value === "Days180Plus" ? (
                          ipo?.details[tableHeader.value] > 0 ? (
                            <div className="flex justify-center items-center gap-1 px-4 py-1 bg-lightGreen rounded-md">
                              <img
                                src={greenIndicator}
                                alt="Green Indicator Icon"
                                className="w-[16px] h-[16px] object-contain"
                              />
                              <span className="font-inter text-sm font-medium text-green1">
                                {ipo.details[tableHeader?.value]}%
                              </span>
                            </div>
                          ) : (
                            <div className="flex justify-center items-center gap-1 px-4 py-1 bg-lightRed rounded-md">
                              <img
                                src={greenIndicator}
                                alt="Green Indicator Icon"
                                className="w-[16px] h-[16px] object-contain rotate-180"
                              />
                              <span className="font-inter text-sm font-medium text-green1">
                                {ipo.details[tableHeader?.value]}%
                              </span>
                            </div>
                          )
                        ) : tableHeader.value === "Days270Plus" ? (
                          ipo?.details[tableHeader.value] > 0 ? (
                            <div className="flex justify-center items-center gap-1 px-4 py-1 bg-lightGreen rounded-md">
                              <img
                                src={greenIndicator}
                                alt="Green Indicator Icon"
                                className="w-[16px] h-[16px] object-contain"
                              />
                              <span className="font-inter text-sm font-medium text-green1">
                                {ipo.details[tableHeader?.value]}%
                              </span>
                            </div>
                          ) : (
                            <div className="flex justify-center items-center gap-1 px-4 py-1 bg-lightRed rounded-md">
                              <img
                                src={greenIndicator}
                                alt="Green Indicator Icon"
                                className="w-[16px] h-[16px] object-contain rotate-180"
                              />
                              <span className="font-inter text-sm font-medium text-green1">
                                {ipo.details[tableHeader?.value]}%
                              </span>
                            </div>
                          )
                        ) : tableHeader.value === "Days360Plus" ? (
                          ipo?.details[tableHeader.value] > 0 ? (
                            <div className="flex justify-center items-center gap-1 px-4 py-1 bg-lightGreen rounded-md">
                              <img
                                src={greenIndicator}
                                alt="Green Indicator Icon"
                                className="w-[16px] h-[16px] object-contain"
                              />
                              <span className="font-inter text-sm font-medium text-green1">
                                {ipo.details[tableHeader?.value]}%
                              </span>
                            </div>
                          ) : (
                            <div className="flex justify-center items-center gap-1 px-4 py-1 bg-lightRed rounded-md">
                              <img
                                src={greenIndicator}
                                alt="Green Indicator Icon"
                                className="w-[16px] h-[16px] object-contain rotate-180"
                              />
                              <span className="font-inter text-sm font-medium text-green1">
                                {ipo.details[tableHeader?.value]}%
                              </span>
                            </div>
                          )
                        ) : (
                          // For other properties, just display the value
                          ipo?.details[tableHeader?.value]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            )}
          </>
        </table>
        {modalPosition.top && (
          <PxModal position={modalPosition} pxChnageId={activeId} />
        )}
      </div>
    </div>
  );
};

export default IpoTableComponent;
