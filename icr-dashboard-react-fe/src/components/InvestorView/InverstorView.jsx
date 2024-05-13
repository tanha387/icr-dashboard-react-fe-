import React from "react";
import rightArrowDir from "../../assets/images/Icons/downArrow.svg";
import Breadcrumb from "./Breadcrumb";
import InvestorViewTable from "./InvestorViewTable";

const InverstorView = () => {
  return (
    <div>
      <Breadcrumb />
      <h1 className="font-inter-bold text-2xl mt-4">
        Fidelity Management & Research Co. LLC
      </h1>
      <div className="flex w-full justify-between flex-wrap items-center pt-1 gap-4 mb-11">
        <div className="flex flex-col gap-4 items-center justify-start">
          <div className="flex  w-full flex-col">
            <p className="font-inter-bold font-semibold text-sm text-steelBlue">
              Type:
              <span className="font-inter-medium font-medium">Private</span>
            </p>
            <p className="font-inter-bold font-semibold text-sm text-steelBlue">
              Headquarters:
              <span className="font-inter-medium font-medium">
                245 Summer StreetBoston, Massachusetts,U.S
              </span>
            </p>
            <p className="font-inter-bold font-semibold text-sm text-steelBlue">
              Funds:
              <span className="font-inter-medium font-medium">283</span>
            </p>
          </div>
        </div>
        <div className="flex gap-6  flex-wrap">
          <div className="flex items-center flex-col gap-1 p-6 rounded-lg shadow-md border-lightGrey bg-white min-w-28 w-max min-h-24 h-auto ">
            <p className="w-full font-inter-medium font-medium text-sm text-steelBlue">
              Turnover
            </p>
            <div className="flex  w-full   ">
              <p className="font-inter mt-3 text-sm text-black text-center px-3  rounded-md border bg-orange2">
                Low
              </p>
            </div>
          </div>
          <div className="flex  items-center flex-col gap-1 p-4 rounded-lg shadow-md border-lightGrey bg-white min-w-40 w-max">
            <p className="w-full font-inter-medium font-medium text-sm text-steelBlue">
              AUM
            </p>
            <div className="flex justify-between w-full items-center">
              <h2 className="font-inter-bold font-semibold text-[32px] text-steelBlue">
                $ 100 B
              </h2>
            </div>
          </div>
          <div className="flex items-center flex-col gap-1 p-4 rounded-lg shadow-md border-lightGrey bg-white min-w-40 w-max">
            <p className="w-full font-inter-medium font-medium text-sm text-steelBlue">
              Investor Contacts
            </p>
            <div className="flex justify-between w-full items-center">
              <h2 className="font-inter-bold font-semibold text-[32px] text-steelBlue">
                140
              </h2>
              <img
                src={rightArrowDir}
                alt="Arrow Icon"
                className="w-[20px] h-[20px] "
              />
            </div>
          </div>
          <div className="flex  items-center flex-col gap-1 p-4 rounded-lg shadow-md border-lightGrey bg-white min-w-40 w-max">
            <p className="w-full font-inter-medium font-medium text-sm text-steelBlue">
              Events & Meetings
            </p>
            <div className="flex justify-between w-full items-center">
              <h2 className="font-inter-bold font-semibold text-[32px] text-steelBlue">
                70
              </h2>
              <img
                src={rightArrowDir}
                alt="Arrow Icon"
                className="w-[20px] h-[20px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <InvestorViewTable></InvestorViewTable>
    </div>
  );
};

export default InverstorView;
