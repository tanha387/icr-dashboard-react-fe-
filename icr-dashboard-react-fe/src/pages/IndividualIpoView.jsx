import React, { useState, useEffect } from "react";
import "../styles/AllUsIpo.css";
import Breadcrumb from "../components/indiviualIpoView/Breadcrumb";
import trend from "../assets/images/Icons/Trend.svg";
import IndividualIpoTabs from "../components/indiviualIpoView/IpoTabs";
import LoadingComponent from "../components/LoadingComponent.jsx";
import Sidebar from "../components/indiviualIpoView/Sidebar.jsx";

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M6.225 4.811a.75.75 0 011.06 0L12 9.526l4.715-4.715a.75.75 0 111.06 1.06L13.526 12l4.715 4.715a.75.75 0 01-1.06 1.06L12 14.474l-4.715 4.715a.75.75 0 01-1.06-1.06L10.474 12 5.76 7.285a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const IndividualIpoView = () => {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-full mt-60">
          <LoadingComponent />
        </div>
      ) : (
        <>
          <Breadcrumb />
          <button
            onClick={toggleSidebar}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
          >
            Toggle Sidebar
          </button>
          <div className="md:flex block justify-between mb-8">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex flex-col">
                <div className="flex items-center pb-6">
                  <h3 className="font-inter-bold text-base text-lightBlack leading-7 text-left bg-white px-3 py-1 rounded-md border border-1 border-neutral-300">
                    ARM
                  </h3>
                  <h1 className="font-inter-bold text-2xl text-black leading-9 text-left ps-6 tracking-normal">
                    Amror Inc.
                  </h1>
                </div>
                <h6 className="font-inter-bold text-sm leading-6 text-left text-steelBlue tracking-normal">
                  IPO Date:
                  <span className="font-inter text-sm leading-6 text-left text-gray-600 p-2 tracking-normal">
                    9|2|13
                  </span>
                </h6>
                <h6 className="font-inter-bold text-sm leading-6 text-left text-steelBlue tracking-normal">
                  Sector:
                  <span className="font-inter text-sm leading-6 text-left text-gray-600 p-2 tracking-normal">
                    Technology
                  </span>
                </h6>
                <h6 className="font-inter-bold text-sm leading-6 text-left text-steelBlue tracking-normal">
                  Banks Involved:
                  <span className="font-inter text-sm leading-6 text-left text-gray-600 p-2 tracking-normal">
                    JPMorgan, Goldman Sachs, Morgan Stanley
                  </span>
                </h6>
              </div>
            </div>
            <div className="flex">
              <div className="w-[155px] h-[100px] me-4 rounded-md py-4 px-3 items-center border border-1 border-neutral-200 bg-white">
                <h3 className="font-inter text-sm font-medium leading-6 tracking-normal text-center pt-2 text-steelBlue">
                  Investor Contacts
                </h3>
                <div className="flex pt-2">
                  <h3 className="font-inter-bold text-3xl ps-3 text-steelBlue">
                    140
                  </h3>
                  <img
                    src={trend}
                    alt="Green Indicator Icon"
                    className="w-8 ms-10"
                  />
                </div>
              </div>
              <div className="w-[155px] h-[100px] me-4 rounded-lg py-4 px-3 items-center border border-1 border-neutral-200 bg-white">
                <h3 className="font-inter text-sm font-medium leading-6 tracking-normal text-center pt-2 text-steelBlue">
                  Events & Meetings
                </h3>
                <div className="flex pt-2">
                  <h3 className="font-inter-bold text-3xl ps-3 text-steelBlue">
                    70
                  </h3>
                  <img
                    src={trend}
                    alt="Green Indicator Icon"
                    className="w-8 ms-16"
                  />
                </div>
              </div>
            </div>
          </div>
          <IndividualIpoTabs />
          {sidebarOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 ">
              <div className="absolute right-0 top-0 max-w-[511px] w-full h-full bg-white shadow-md">
                <button
                  onClick={toggleSidebar}
                  className="text-black px-4 py-2 absolute top-2 right-2"
                >
                  <CloseIcon />
                </button>
                <div className="p-4 mt-10">
                  <Sidebar />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default IndividualIpoView;
