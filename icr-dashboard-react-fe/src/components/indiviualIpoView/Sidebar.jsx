import React from "react";
import SidebarTabs from "./SidebarTabs";
import InvestorSharesBarchart from "./InvestorSharesBarchart";

const Sidebar = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 overflow-auto h-[100vh]">
      <h2 className="font-inter-bold text-2xl text-black">
        Fidelity Management & Research Co. LLC
      </h2>
      <p className="font-inter-medium text-sm text-neutralBlue mt-7">
        Type: Private
      </p>
      <p className="font-inter-medium text-sm text-neutralBlue mt-2">
        Headquarters: 245 Summer StreetBoston, Massachusetts,U.S.
      </p>
      <p className="font-inter-medium text-sm text-neutralBlue mt-2">
        Funds: 283
      </p>
      <div className="flex flex-col sm:flex-row w-full justify-between flex-wrap items-center pt-1 mb-11 mt-9">
        <div className="mb-6 sm:mb-0">
          <p className="font-inter-medium text-xs text-neutralBlue mt-2">AUM</p>
          <h1 className="font-inter-bold text-2xl text-steelBlue">$100B</h1>
        </div>
        <div className="sm:me-56">
          <p className="font-inter-medium text-sm text-steelBlue">Turnover</p>
          <div className="flex w-full">
            <p className="font-inter mt-3 text-sm text-black text-center px-3 rounded-sm border bg-orange2">
              Low
            </p>
          </div>
        </div>
      </div>

      <button className="w-full sm:w-[129px] bg-black text-white p-2 rounded-md flex items-center justify-center">
        Full Profile
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 15.293a1 1 0 010-1.414L13.586 10 10.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <hr className="mt-7"></hr>
      <h2 className="font-inter-bold text-xl text-black mt-4">IPO: ARM </h2>
      <p className="font-inter-medium text-xs text-neutralBlue mt-2">
        Date: 9/13/23
      </p>
      <SidebarTabs />
      <InvestorSharesBarchart />
    </div>
  );
};

export default Sidebar;
