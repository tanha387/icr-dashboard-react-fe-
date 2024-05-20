import React, { useState } from "react";
import { icrIndiviualIpoBodyData } from "../../assets/data/constants";
import downArrow from "../../assets/images/Icons/minus.svg";
import icon from "../../assets/images/Icons/Icon.svg";

const EventsMeetings = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedRow === index) {
      setExpandedRow(null);
    } else {
      setExpandedRow(index);
    }
  };

  return (
    <div className="w-full mt-3">
      <div className="overflow-auto h-80">
        <table className="w-full bg-white shadow-lg rounded-lg ">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 whitespace-nowrap text-left font-inter-bold text-xs font-semibold text-lightBlack">
                Investor Name
              </th>
              <th className="px-4 py-2 whitespace-nowrap text-left font-inter-bold text-xs font-semibold text-lightBlack">
                Type
              </th>
              <th className="px-4 py-2 whitespace-nowrap text-left font-inter-bold text-xs font-semibold text-lightBlack">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {icrIndiviualIpoBodyData.map((data, index) => (
              <React.Fragment key={index}>
                <tr className="text-gray-700">
                  <td className="py-2 whitespace-nowrap w-max font-inter text-sm font-medium text-lightBlack">
                    <td
                      className="px-2 py-1 whitespace-nowrap text-left font-inter-bold text-sm text-lightBlack"
                      onClick={() => toggleAccordion(index)}
                    >
                      <img
                        src={expandedRow === index ? downArrow : icon}
                        alt="sort icon"
                        className="w-4 h-4 inline-block ml-1"
                      />
                      <span className="font-inter px-4 py-1 whitespace-nowrap w-max text-left text-sm font-medium text-black">
                        {expandedRow === index
                          ? data.investorDetails.investorName
                          : data.investorDetails.investorName.length > 20
                          ? `${data.investorDetails.investorName.slice(
                              0,
                              20
                            )}...`
                          : data.investorDetails.investorName}
                      </span>
                    </td>
                  </td>
                  <td className="py-2 whitespace-nowrap w-max font-inter text-sm font-medium text-lightBlack">
                    {data.investorDetails.type}
                  </td>
                  <td className="ps-4 py-1 whitespace-nowrap w-max font-inter text-sm font-medium text-lightBlack">
                    {data.investorDetails.date}
                  </td>
                  <td className="ps-4 py-1 whitespace-nowrap w-max font-inter text-sm font-medium text-lightBlack">
                    {expandedRow === index && (
                      <>
                        <div>{data.name}</div>
                        <div>{data.email}</div>
                      </>
                    )}
                  </td>
                </tr>
                {expandedRow === index && (
                  <tr>
                    <td colSpan="2" className="px-4 py-3 bg-gray-100">
                      Additional details or content
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsMeetings;
