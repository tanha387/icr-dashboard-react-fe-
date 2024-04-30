import React, { useState, useEffect, useRef } from 'react'
import downArrow from '../../assets/images/Icons/downArrow.svg';
import indicator1 from '../../assets/images/Icons/indicator1.svg';
import indicator2 from '../../assets/images/Icons/indicator2.svg';
import indicator3 from '../../assets/images/Icons/indicator3.svg';
import InputRange from 'react-input-range';
import { icrInvolmentBreakdowndata, icrInvolmentAllData } from '../../assets/data/constants.js';
import { useIcrOptions } from '../../context/settingsContext.jsx';
import useOutsideAlerter from '../../hooks/useOutsideAlerter.jsx';

const FilterComponent = ({
    filters,
    selectedFilters,
    setSelectedFilters,
    icrInvolmentFilters,
    setIcrInvolmentFilters,
    handleIcrInvolvementFilter,
    expandIcrInvolvement,
    handleExpandIcrInvolvement,
    // handleFiltersSubmit,
}) => {
    const filterRef = useRef(null);
    const filterRefIgnore = useRef(null);
    const icrInvolvementRef = useRef(null);
    const icrInvolvementRefIgnore = useRef(null);
    const { icrOptions } = useIcrOptions();
    const [expandedFilters, setExpandedFilters] = useState({});

    useEffect(() => {
        setIcrInvolmentFilters([]);
    }, [icrOptions]);

    const toggleFilter = (filterKey) => {
        setExpandedFilters((prevExpandedFilters) => ({
            [filterKey]: !prevExpandedFilters[filterKey],
        }));
    };

    const handleCheckboxChange = (key, optionSlug) => {
        setSelectedFilters((prevState) => ({
            ...prevState,
            [key]: {
                ...prevState[key] || {},
                [optionSlug]: !prevState[key]?.[optionSlug],
            },
        }));
    };

    const handleRangeChange = (filterKey, value) => {
        setSelectedFilters({
            ...selectedFilters,
            [filterKey]: value,
        });
    };

    useOutsideAlerter(filterRef, () => setExpandedFilters({}), filterRefIgnore);
    useOutsideAlerter(icrInvolvementRef, () => setExpandedFilters({}), icrInvolvementRefIgnore);

    const renderFilterOptions = (filterKey, filter) => {
        if (filter.type === 'checkboxitems') {
            return (
                <div ref={filterRef} className="absolute top-10 left-0 bg-white rounded-lg p-2 shadow-md z-10 w-max">
                    {filter.options.map((option) => (
                        <div key={option.slug} className='flex p-2 gap-3 items-center'>
                            <input
                                type="checkbox"
                                id={option.slug}
                                checked={selectedFilters[filterKey]?.[option.slug] || false}
                                onChange={() => handleCheckboxChange(filterKey, option.slug)}
                                className="text-indigo-600 rounded-md border border-solid border-gray-300 focus:ring-indigo-500 h-4 w-4"
                            />
                            <label htmlFor={option.slug} className='font-inter-medium font-medium text-base color-lightBlack'>{option.value}</label>
                        </div>
                    ))}
                </div>
            );
        } else if (filter.type === 'range') {
            return (
                <div ref={filterRef} className="absolute top-10 left-0 bg-white rounded-lg px-6 py-10 pt-14 shadow-md z-10 w-80 flex justify-center items-center">
                    <InputRange
                        minValue={filter.start}
                        maxValue={filter.end}
                        value={selectedFilters[filterKey] || { min: filter.start, max: filter.end }}
                        onChange={(value) => handleRangeChange(filterKey, value)}
                    />
                </div>
            );
        }
        return null;
    };

    return (
        <div className="flex gap-2 items-center justify-start relative flex-wrap gap-y-4">
            {filters?.map((filterObj) => {
                const filterKey = Object.keys(filterObj)[0];
                const filter = filterObj[filterKey];
                return (
                    <div key={filterKey} className="relative">
                        <div className="flex">
                            <button
                                className="bg-grey py-1 px-3 rounded-lg cursor-pointer flex justify-between items-center"
                                onClick={() => toggleFilter(filterKey)}
                                ref={filterRefIgnore}
                            >
                                {filterKey}
                                <img src={downArrow} alt="down arrow" className='w-[20px] h-[20px] object-contain' />
                            </button>
                        </div>
                        {expandedFilters[filterKey] && renderFilterOptions(filterKey, filter)}
                    </div>
                );
            })}
            <div className="relative">
                <div className="flex">
                    <button
                        ref={icrInvolvementRefIgnore}
                        className="bg-grey py-1 px-3 rounded-lg cursor-pointer flex justify-between items-center"
                        onClick={() => {
                            handleExpandIcrInvolvement();
                            toggleFilter('icr_involvement');
                        }}
                    >
                        ICR Involvement
                        <img src={downArrow} alt="down arrow" className='w-[20px] h-[20px] object-contain' />
                    </button>
                </div>
                {expandedFilters['icr_involvement'] && (
                    icrOptions === 'all' ? (
                        <div ref={icrInvolvementRef} className="absolute top-10 left-0 bg-white rounded-lg p-2 shadow-md z-10 w-max">
                            {icrInvolmentAllData.map((option) => (
                                <div key={option.value} className="flex p-2 gap-1 items-center">
                                    <input
                                        type="checkbox"
                                        id={option.value}
                                        checked={(icrInvolmentFilters.icr_involvement && icrInvolmentFilters.icr_involvement[option.value]) || false}
                                        onChange={() => handleIcrInvolvementFilter(option.value)}
                                        className="text-indigo-600 rounded-md border border-solid border-gray-300 focus:ring-indigo-500 h-4 w-4"
                                    />
                                    {option.value === 'all_ipos' ? <span className='w-[20px] h-[20px] bg-white'></span> : <img src={indicator1} alt='Indicator' className='w-[20px] h-[20px] object-contain' />}
                                    <label htmlFor={option.value} className="font-inter-medium font-medium text-base color-lightBlack">
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div ref={icrInvolvementRef} className="absolute top-10 left-0 bg-white rounded-lg p-2 shadow-md z-10 w-max">
                            {icrInvolmentBreakdowndata.map((option) => (
                                <div key={option.value} className="flex p-2 gap-3 items-center">
                                    <input
                                        type="checkbox"
                                        id={option.value}
                                        checked={(icrInvolmentFilters.icr_involvement && icrInvolmentFilters.icr_involvement[option.value]) || false}
                                        onChange={() => handleIcrInvolvementFilter(option.value)}
                                        className="text-indigo-600 rounded-md border border-solid border-gray-300 focus:ring-indigo-500 h-4 w-4"
                                    />
                                    {option.value === 'icr_capital' ? <img src={indicator1} alt='Indicator' className='w-[20px] h-[20px] object-contain' /> : option.value === 'icr_ir' ? <img src={indicator2} alt='Indicator' className='w-[20px] h-[20px] object-contain' /> : option.value === 'both' ? <img src={indicator3} alt='Indicator' className='w-[20px] h-[20px] object-contain' /> : <span className='w-[20px] h-[20px] bg-white'></span>}
                                    <label htmlFor={option.value} className="font-inter-medium font-medium text-base color-lightBlack">
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )

                )}

            </div>

            {/* <div className='flex'>
                <button onClick={handleFiltersSubmit}
                    className='flex justify-center items-center font-inter-medium text-white px-3 py-1 bg-orange rounded-lg cursor-pointer hover:bg-orange1 transition-colors duration-300 ease-in-out'
                >
                    Apply
                </button>
            </div> */}
        </div>
    );
};

export default FilterComponent;