import React from 'react';

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500 mb-4"></div>
        <h2 className="text-center text-2xl font-semibold">Loading...</h2>
        <p className="w-1/3 text-center text-gray-500">
        </p>
      </div>
    </div>
  );
}

export default Loading;