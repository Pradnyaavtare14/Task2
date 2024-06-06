// import React from 'react';

const NextPage = () => {
  return (
    <div className="p-4">
      <div className='flex justify-center lg:justify-start lg:ml-32 mt-24'>
        <h1 className='text-2xl sm:text-3xl font-semibold'>Featured profile this week</h1>
      </div>
      {/* Next column */}
      <div className="flex flex-wrap justify-center lg:justify-start space-y-8 lg:space-x-8 lg:space-y-0 mt-12 mb-10">
        
        {/* Flex box template */}
        {["Trusted", "Easy to use", "Faster", "Efficient"].map((title, index) => (
          <div key={index} className="flex flex-col items-start shadow-lg w-full sm:w-64 p-4 mx-2 sm:mx-0">
            {/* Circle and name */}
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-gray-400 rounded-full mr-2"></div>
              <h2 className="text-base sm:text-lg font-semibold">Name</h2>
            </div>
            {/* Title and content */}
            <h2 className="text-base sm:text-lg font-semibold mb-2">{title}</h2>
           
            {/* Stars and button */}
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star, i) => (
                <svg key={i} className={`h-5 w-5 ${i < 4 ? 'text-orange-400' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15l-5.09 2.58 1.18-6.88-5-4.87 6.91-1L10 .25 11.91 4.83 18.82 5l-5 4.87 1.18 6.88z" />
                </svg>
              ))}
              <button className="ml-2 py-1 px-3 bg-orange-400 text-white text-xs sm:text-sm rounded">Button</button>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default NextPage;
