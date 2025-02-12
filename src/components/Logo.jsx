import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className="flex items-center justify-center" style={{ width }}>
      <div className="flex items-center space-x-2">
        <div className="bg-blue-500 text-white font-bold rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 sm:ml-30 md:ml-20 lg:ml-2 flex items-center justify-center">
          MB
        </div>
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">MegaBlog</span>
      </div>
    </div>
  )
}

export default Logo