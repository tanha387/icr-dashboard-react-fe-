import React, { useState } from "react";

const IndicationInvestor = () => {
  // State for managing dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Array of dropdown items
  const dropdownItems = [
    { label: "Sector" },
    { label: "Years:2020-23" },
    { label: "Final Deal Size" },
    { label: "Market Cap" },
    { label: "ICR Imporvement" },
  ];

  return (
    <div className="flex">
      <div className="flex">
        {dropdownItems.map((item, index) => (
          <div key={index}>
            <button
              id={`dropdownDividerButton${index}`}
              data-dropdown-toggle={`dropdownDivider${index}`}
              className="text-whitee focus:ring-blue-300 font-inter rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center border me-4"
              type="button"
              onClick={toggleDropdown}
            >
              <h2 className="text-steelBlue font-inter-bold">{item.label}</h2>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndicationInvestor;
