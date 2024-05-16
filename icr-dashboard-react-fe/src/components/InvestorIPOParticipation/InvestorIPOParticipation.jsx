import React, { useState, useEffect } from "react";
import { InvestorIpoTabsInfo } from "../../assets/data/constants.js";
import LoadingComponent from "../../components/LoadingComponent.jsx";

const InvestorIPOParticipation = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setLoading(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const renderComponent = () => {
    const tab = InvestorIpoTabsInfo[activeTab];
    return <tab.component />;
  };

  return (
    <div>
      <h1 className="font-inter-bold text-2xl mt-9">
        Investor IPO Participation
      </h1>

      {/* Tab section */}
      <ul className="flex flex-wrap overflow-x-auto mt-9 ">
        {InvestorIpoTabsInfo.map((tab, index) => (
          <li
            key={index}
            className={`font-inter-bold text-base leading-6 text-left mt-5 ${
              index === activeTab
                ? "border-b-2 border-orange1"
                : "border-transparent"
            }`}
          >
            <button
              onClick={() => handleTabClick(index)}
              className={`py-2 px-3 me-2 ${
                index === activeTab
                  ? "text-lightBlack font-inter-bold text-sm border-orange1 "
                  : "font-inter text-sm text-neutralBlue"
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      {/* Render selected component with loader */}
      <div className="mt-4">
        {loading ? <LoadingComponent /> : renderComponent()}
      </div>
    </div>
  );
};
export default InvestorIPOParticipation;
