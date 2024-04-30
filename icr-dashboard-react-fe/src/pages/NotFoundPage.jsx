import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-6xl font-bold text-gray-800 mb-4">404</div>
            <div className="text-2xl font-semibold text-gray-800 mb-8">Page Not Found</div>
            <Link to="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 ease-in-out">Go to Home Page</Link>
        </div>
    );
};

export default NotFoundPage;