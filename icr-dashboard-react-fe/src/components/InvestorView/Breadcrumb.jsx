import React from "react";

const Breadcrumb = () => {
  return (
    <div>
      <nav className="flex flex-wrap mt-5" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="flex items-center">
            <h3 className="font-inter-medium font-medium text-sm text-neutralBlue">
              All ICR IPOs
            </h3>
          </li>

          <li aria-current="page" className="mt-2 md:mt-0">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <h3 className="font-inter-medium font-medium text-sm text-neutralBlue">
                ARM:Amror lnc
              </h3>
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <h3 className="font-inter-medium font-medium text-sm text-neutralBlue opacity-60">
                Fidelity Management & Research Co. LLC
              </h3>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
