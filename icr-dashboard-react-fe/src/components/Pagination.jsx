import React from 'react';
import paginateIcon from '../assets/images/Icons/paginateIcon.svg';
import paginateIconDisable from '../assets/images/Icons/paginateIconDisable.svg';

const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => {
    return (
        <div className='flex justify-between items-center gap-4'>
            <h3 className='font-inter-medium text-sm text-lightBlack'>
                {/* Show current page and total pages */}
               Page <span>{currentPage}-{totalPages}</span>
            </h3>
            <div className='flex justify-center items-center gap-2'>
                {/* Render Prev button */}
                <button onClick={onPrev} disabled={currentPage === 1} className={`flex items-center justify-center ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}>
                    <img src={paginateIcon} alt='Paginate Icon' className='w-[20px] h-[20px] object-contain rotate-180' />
                </button>

                {/* Render Next button */}
                <button onClick={onNext} disabled={currentPage === totalPages} className={`flex items-center justify-center ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}>
                    <img src={paginateIcon} alt='Paginate Icon' className='w-[20px] h-[20px] object-contain' />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
