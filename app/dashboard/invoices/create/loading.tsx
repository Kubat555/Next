import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">

            <p className="mt-4 text-gray-900 animate-pulse">Loading...</p>
        </div>
    );
};

export default Loading;
