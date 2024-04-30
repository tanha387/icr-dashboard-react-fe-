import React from 'react'
import Pagination from '../../components/Pagination.jsx'
import { icrIndicatorsData } from '../../assets/data/constants.js'

const IndicationComponent = ({
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
    totalCount,
    getIndications
}) => {
    return (
        <div className='py-3 flex justify-between items-center flex-wrap gap-y-4 px-5'>
            <div className='flex gap-6 items-center justify-start'>
                <div className=''>
                    <span className='font-inter text-sm text-neutralBlue font-medium'>
                        {totalCount} results
                    </span>
                </div>
                {
                    getIndications && <div className='flex gap-3 items-center justify-center'>
                        {
                            icrIndicatorsData.map((icrData, index) => (
                                <div key={index} className='flex gap-1 items-center justify-center'>
                                    <img src={icrData.icon} alt='Indicator Icon' className='w-[20px] h-[20px]' />
                                    <h3 className='font-inter text-xs text-lightBlack '>
                                        {icrData.label}
                                    </h3>
                                </div>
                            ))
                        }

                    </div>
                }
            </div>
            <div className='flex items-center justify-center'>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNext={handleNextPage}
                    onPrev={handlePrevPage}
                />
            </div>
        </div>
    )
}

export default IndicationComponent
