import React, { useState } from "react";
import { IndiviualIpoTabsInfo } from "../../assets/data/constants";

const IndividualIpoTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubcategory, setActiveSubcategory] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveSubcategory(0);
  };

  const handleSubcategoryClick = (subcategoryIndex) => {
    setActiveSubcategory(subcategoryIndex);
  };

  const renderSubcategoryComponent = () => {
    if (activeTab !== null && activeSubcategory !== null) {
      const tab = IndiviualIpoTabsInfo[activeTab];
      const subcategory = tab.subcategories[activeSubcategory];
      return <subcategory.component />;
    }
    return null;
  };

  return (
    <div className="ms-2">
      {/* Tab section */}
      <ul className="flex flex-wrap overflow-x-auto  border-b-2 border-lightGrey ">
        {IndiviualIpoTabsInfo.map((tab, index) => (
          <li
            key={index}
            className={` font-inter-bold text-sm leading-6 text-left mt-1 border-b-2 
          
            
            

             ${
               index === activeTab
                 ? "border-orange1 border-b-2 "
                 : "border-transparent"
             }`}
          >
            <button
              onClick={() => handleTabClick(index)}
              className={` py-2 px-3 me-2 ${
                index === activeTab
                  ? "text-lightBlack font-inter-bold text-sm  "
                  : "font-inter text-sm text-neutralBlue leading-6 tracking-tight text-left"
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Subcategory section */}

      <div className="mt-1">
        {IndiviualIpoTabsInfo.map((tab, index) => (
          <div key={index} className={`${index === activeTab ? "" : "hidden"}`}>
            {index === activeTab && tab.subcategories ? (
              <div>
                {tab.subcategories.map((subcategory, subIndex) => (
                  <button
                    key={subIndex}
                    className={`py-1 px-4 me-4 mt-2 ${
                      subIndex === activeSubcategory
                        ? "border-orange1 border-2 text-black font-inter text-sm leading-6 tracking-tighter text-left rounded-md"
                        : "border-gray-300 border-2 font-inter text-sm text-black leading-6 tracking-tighter text-left rounded-md"
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

      {/* Render subcategory component */}
      <div className="mt-4">{renderSubcategoryComponent()}</div>
    </div>
  );
};

export default IndividualIpoTabs;
