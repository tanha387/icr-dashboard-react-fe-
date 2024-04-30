import React from 'react';

const LoadingComponent = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="flex items-center flex-col gap-8">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange"></div>
                <div className="ml-4 text-xl text-gray-700 font-inter-bold font-medium text-lightBlack">Loading...</div>
            </div>
        </div>
    );
};

export default LoadingComponent;
