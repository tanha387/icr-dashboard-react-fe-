import React, { useState, useEffect } from "react";
import "../styles/AllUsIpo.css";
import Breadcrumb from "../components/indiviualIpoView/Breadcrumb";
import trend from "../assets/images/Icons/Trend.svg";
import IndividualIpoTabs from "../components/indiviualIpoView/IpoTabs";
import LoadingComponent from "../components/LoadingComponent.jsx";
const IndividualIpoView = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-full mt-60">
          <LoadingComponent />
        </div>
      ) : (
        <>
          <Breadcrumb />
          <div className="md:flex block justify-between mb-8">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex flex-col">
                <div className="flex items-center pb-6">
                  <h3 className="font-inter-bold text-base text-lightBlack leading-7 text-left bg-white px-3 py-1 rounded-md border border-1 border-neutral-300">
                    ARM
                  </h3>
                  <h1 className="font-inter-bold text-2xl text-black leading-9 text-left ps-6 tracking-normal">
                    Amror lnc.
                  </h1>
                </div>
                <h6 className="font-inter-bold text-sm  leading-6 text-left text-steelBlue tracking-normal">
                  IPO Date:
                  <span className="font-inter text-sm  leading-6 text-left text-gray-600 p-2 tracking-normal">
                    9|2|13
                  </span>
                </h6>
                <h6 className="font-inter-bold text-sm  leading-6 text-left text-steelBlue tracking-normal">
                  Sector:
                  <span className="font-inter text-sm  leading-6 text-left text-gray-600 p-2 tracking-normal">
                    Technology
                  </span>
                </h6>
                <h6 className="font-inter-bold text-sm  leading-6 text-left text-steelBlue tracking-normal">
                  Banks Involved:
                  <span className="font-inter text-sm  leading-6 text-left text-gray-600 p-2 tracking-normal">
                    JPMorgan, Goldman Sachs, Morgan Stanley
                  </span>
                </h6>
              </div>
            </div>
            <div className="flex">
              <div className="w-[155px] h-[100px]   me-4 rounded-md py-4 px-3 items-center border border-1 border-neutral-200 bg-white">
                <h3 className="font-inter text-sm font-medium leading-6 tracking-normal text-center pt-2 text-steelBlue ">
                  Inverstor Contacts
                </h3>
                <div className="flex pt-2">
                  <h3 className="font-inter-bold text-3xl ps-3 text-steelBlue  ">
                    140
                  </h3>
                  <img
                    src={trend}
                    alt="Green Indicator Icon"
                    className="w-8   ms-10"
                  />
                </div>
              </div>
              <div className="w-[155px] h-[100px]   me-4 rounded-lg py-4 px-3 items-center border border-1 border-neutral-200 bg-white">
                <h3 className="font-inter text-sm font-medium leading-6 tracking-normal text-center pt-2 text-steelBlue ">
                  Events & Meetings
                </h3>
                <div className="flex pt-2">
                  <h3 className="font-inter-bold text-3xl ps-3 text-steelBlue">
                    70
                  </h3>
                  <img
                    src={trend}
                    alt="Green Indicator Icon"
                    className="w-8   ms-16"
                  />
                </div>
              </div>
            </div>
          </div>
          <IndividualIpoTabs />
        </>
      )}
    </div>
  );
};
export default IndividualIpoView;
