import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-input-range/lib/css/index.css';
import FilterComponent from '../components/allIpos/FilterComponent.jsx';
import toast, { Toaster } from 'react-hot-toast';
import { filtersListApi, getAllUsIpoData } from '../api'
import IndicationComponent from '../components/allIpos/IndicationComponent.jsx'
import IpoTableComponent from '../components/allIpos/IpoTableComponent.jsx'
import LoadingComponent from '../components/LoadingComponent.jsx'
import { constructQueryString } from '../utils/utilityFunctions.js'
import { getAllocationByHolderStyleChart, getProceedsBySectorChart } from '../api/allUsIpos.js';
import PieChartsUi from '../components/allIpos/PieChartsUi.jsx'
import '../styles/AllUsIpo.css'



const AllUsIpo = () => {
  const navigate = useNavigate();
  const tableRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [filterDatalist, setFilterDatalist] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [icrIpoData, setIcrIpoData] = useState([]);
  const [icrInvolmentFilters, setIcrInvolmentFilters] = useState({ icr_involvement: {} });
  const [expandIcrInvolvement, setExpandIcrInvolvement] = useState(false);
  const [sortingCriteria, setSortingCriteria] = useState({ sortBy: null, sortType: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [allocationChartData, setAllocationChartData] = useState([]);
  const [sectorChartData, setSectorChartData] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);

  useEffect(() => {
    const fetchProceedsBySectorChart = async () => {
      try {
        setLoading(true);
        const response = await getProceedsBySectorChart();
        setSectorChartData(response?.holder_styles);
      } catch (error) {
        toast.error('Failed to fetch allocation data');
      } finally {
        setLoading(false);
      }
    }

    fetchProceedsBySectorChart();
  }, []);

  useEffect(() => {
    const fetchAllocationByHolderStyleChart = async () => {
      try {
        setLoading(true);
        const response = await getAllocationByHolderStyleChart();
        // console.log(response);
        setAllocationChartData(response?.holder_styles);
      } catch (error) {
        toast.error('Failed to fetch allocation data');
      } finally {
        setLoading(false);
      }
    }

    fetchAllocationByHolderStyleChart();
  }, []);


  const handleHeaderClick = (headerText) => {
    let newSortingCriteria = { sortBy: headerText, sortType: 'asc' };

    // If the same sortBy header is clicked again, toggle the sort sortType
    if (sortingCriteria.sortBy === newSortingCriteria.sortBy) {
      newSortingCriteria.sortType = sortingCriteria.sortType === 'asc' ? 'desc' : 'asc';
    }

    setSortingCriteria(newSortingCriteria);
  }


  const fetchIpoData = async () => {
    try {
      setTableLoading(true);
      let filterOptions1 = constructQueryString(selectedFilters)
      let filterOption2 = constructQueryString(icrInvolmentFilters)
      let sortOption = constructQueryString(sortingCriteria)
      const response = await getAllUsIpoData(filterOptions1, filterOption2, sortOption);
      setIcrIpoData(response?.allIpoDetail);
      // setTotalPages(response?.paginationData.totalPages);
      // setTotalCount(response?.paginationData.totalCount);
    } catch (error) {
      toast.error('Failed to fetch IPOs data');
    } finally {
      setTableLoading(false);
    }

  }

  useEffect(() => {
    fetchIpoData();
  }, [selectedFilters, icrInvolmentFilters, sortingCriteria, currentPage]);


  useEffect(() => {
    const fetchFilterDataList = async () => {
      try {
        setLoading(true);
        const response = await filtersListApi();
        setFilterDatalist(response?.filters);
      } catch (error) {
        toast.error('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    }

    fetchFilterDataList();
  }, []);



  useEffect(() => {
    const table = tableRef.current;
    const firstHeader = table?.querySelector('thead th:first-child');
    const firstBodyCell = table?.querySelector('tbody td:first-child');

    const handleScroll = () => {
      if (table) {
        const scrollLeft = table.scrollLeft;
        firstHeader.style.transform = `translateX(${scrollLeft}px)`;
        firstHeader.style.borderRight = '1px solid red';
        firstHeader.style.borderBottom = '1px solid red';
        firstBodyCell.style.transform = `translateX(${scrollLeft}px)`;
      }
    };

    if (table) {
      table.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (table) {
        table.removeEventListener('scroll', handleScroll);
      }
    };
  }, [tableRef]);


  const handleIcrInvolvementFilter = (optionValue) => {
    // debugger
    const updatedFilters = { ...icrInvolmentFilters }; // Copy the current state

    // Check if the option is already selected
    if (updatedFilters.icr_involvement && updatedFilters.icr_involvement[optionValue]) {
      // If the option is already selected, remove it
      delete updatedFilters.icr_involvement[optionValue];
    } else {
      // If the option is not selected, add it
      updatedFilters.icr_involvement = {
        ...(updatedFilters.icr_involvement || {}),
        [optionValue]: true
      };
    }

    setIcrInvolmentFilters(updatedFilters);
  };

  const handleExpandIcrInvolvement = () => {
    setExpandIcrInvolvement(!expandIcrInvolvement);
  };

  const handleFiltersSubmit = () => {
    const liveUrl = constructQueryString(icrInvolmentFilters);
    const liveUrl1 = constructQueryString(selectedFilters);


    // console.log('LiveURL', liveUrl);
    // console.log('LiveURL1', liveUrl1);
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  const handleRowClick = (id) => {
    navigate(`/${id}`);
  }

  const handlePxChart = (id) => {
    // console.log('PX xhart clicked', id);
  }


  return (
    <section className={`pt-12 flex flex-col overflow-x-hidden min-h-screen ${icrIpoData?.length > 0 ? '' : 'justify-center'}`}>
      {
        loading ? (
          <LoadingComponent />
        ) : (
          <>
            <div className='flex items-center justify-start pb-12'>
              <h1 className='font-inter-bold text-2xl text-black font-semibold'>
                All U.S. IPOs
              </h1>
              <Toaster
                position="top-right"
                reverseOrder={false}
              />
            </div >

            <div className='flex w-full border border-lightGrey rounded-lg shadow-lg flex-col bg-white mb-32'>
              <div className='flex justify-between py-4 px-6 w-full flex-wrap gap-y-4 border-b border-lightGrey '>
                <div className='flex gap-2 items-center justify-start flex-wrap'>

                  <div>
                    {
                      <FilterComponent
                        filters={filterDatalist}
                        selectedFilters={selectedFilters}
                        setSelectedFilters={setSelectedFilters}
                        icrInvolmentFilters={icrInvolmentFilters}
                        setIcrInvolmentFilters={setIcrInvolmentFilters}
                        handleIcrInvolvementFilter={handleIcrInvolvementFilter}
                        expandIcrInvolvement={expandIcrInvolvement}
                        handleExpandIcrInvolvement={handleExpandIcrInvolvement}
                      // handleFiltersSubmit={handleFiltersSubmit}
                      />
                    }
                  </div>

                </div>
              </div>

              <IndicationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                totalCount={totalCount}
                getIndications={true}
              />

              <IpoTableComponent
                icrIpoData={icrIpoData}
                tableRef={tableRef}
                handleRowClick={handleRowClick}
                handlePxChart={handlePxChart}
                sortingCriteria={sortingCriteria}
                handleHeaderClick={handleHeaderClick}
                tableLoading={tableLoading}
                setTableLoading={setTableLoading}
              />

              <IndicationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                totalCount={totalCount}
              />

              <div className='flex justify-center items-center gap-12 p-12 flex-wrap'>
                <PieChartsUi
                  title='Allocation by Holder Style'
                  stateValue={allocationChartData}
                />

                <PieChartsUi
                  title='Proceeds by Sector'
                  stateValue={sectorChartData}
                />
              </div>
            </div>
          </>
        )
      }

    </section >
  )
}

export default AllUsIpo;
