import React from "react";

const Breadcrumb = () => {
  return (
    <div>
      <nav className="flex flex-wrap mt-5" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-gray-700">
          <li className="flex items-center">
            <a
              href="#"
              className="font-inter-medium text-sm  text-neutralBlue md:text-lg font-medium  text-left p-3"
            >
              ALL ICR IPOS
            </a>
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
              <span className="ms-1 font-inter text-xs text-neutralBlue md:text-lg  text-left ">
                Indiviual IPO Detail
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
