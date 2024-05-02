import React, { useState, useEffect } from "react";
import { IndiviualIpoTabsInfo } from "../../assets/data/constants";
import LoadingComponent from "../../components/LoadingComponent.jsx";

const IndividualIpoTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubcategory, setActiveSubcategory] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveSubcategory(0);
    setLoading(true);
  };

  const handleSubcategoryClick = (subcategoryIndex) => {
    setActiveSubcategory(subcategoryIndex);
    setLoading(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeTab, activeSubcategory]);

  const renderSubcategoryComponent = () => {
    const tab = IndiviualIpoTabsInfo[activeTab];
    const subcategory = tab.subcategories[activeSubcategory];
    return <subcategory.component />;
  };

  return (
    <div className="ms-2">
      {/* Tab section */}
      <ul className="flex flex-wrap overflow-x-auto border-b border-lightGrey">
        {IndiviualIpoTabsInfo.map((tab, index) => (
          <li
            key={index}
            className={`font-inter-bold text-sm leading-6 text-left mt-1 border-b ${
              index === activeTab ? "border-orange1" : "border-transparent"
            }`}
          >
            <button
              onClick={() => handleTabClick(index)}
              className={`py-2 px-3 me-2 ${
                index === activeTab
                  ? "text-lightBlack font-inter-bold text-sm"
                  : "font-inter text-sm text-neutralBlue"
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Subcategory section */}
      <div className="mt-4 ms-2">
        {IndiviualIpoTabsInfo.map((tab, index) => (
          <div key={index} className={index === activeTab ? "" : "hidden"}>
            {index === activeTab && tab.subcategories ? (
              <div>
                {tab.subcategories.map((subcategory, subIndex) => (
                  <button
                    key={subIndex}
                    className={` px-2 me-4 mt-2 ${
                      subIndex === activeSubcategory
                        ? "border-orange1 border text-black font-inter text-sm leading-6 tracking-tighter text-left rounded-md"
                        : "border-gray-300 border font-inter text-sm text-black leading-6 tracking-tighter text-left rounded-md"
                    }`}
                    onClick={() => handleSubcategoryClick(subIndex)}
                  >
                    {subcategory.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* Render subcategory component with loader */}
      <div className="mt-4">
        {loading ? <LoadingComponent /> : renderSubcategoryComponent()}
      </div>
    </div>
  );
};

export default IndividualIpoTabs;
