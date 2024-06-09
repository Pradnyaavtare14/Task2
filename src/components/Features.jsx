// import React from 'react';
import customer from "../assets/images/customer.png";
import rectangle from '../assets/images/rectangle.png';

const Features = () => {
  return (
    <div className="p-4">
      <div className='flex flex-col justify-center items-center mt-24'>
        <h1 className='text-3xl font-semibold mb-7'>Featured Jobs</h1>
        <p className='text-center mx-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsam, ad est iure labore nobis
          <br className="hidden sm:block" />
          ex consequuntur reiciendis iste dolores consectetur. Nam in illo eaque magni fugit explicabo quae esse!
        </p>
      </div>
      {/* Jobs Section */}
      <div className="flex flex-wrap justify-center items-center text-center mt-12 gap-8">
        {["Database Programmer", "UI/UX Designer", "Content Writer", "Database Programmer"].map((title, index) => (
          <div key={index} className="flex flex-col items-center shadow-lg h-80 w-64 p-4 mb-5 mx-2">
            <div className="h-10 w-10 bg-gray-400 flex justify-center items-center text-center rounded-full mb-4"></div>
            <h1 className="text-lg font-semibold mb-2">{title}</h1>
            <p className="text-sm mb-4">This is the content of the box. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="text-md mb-4">$14,000-$25,000 /monthly</p>
            <p className="text-sm text-gray-600 mb-4">London, England</p>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 3.172a4.008 4.008 0 015.656 0L10 4.343l1.172-1.171a4.008 4.008 0 115.656 5.656L10 15.656 3.172 8.828a4.008 4.008 0 010-5.656z" />
                  </svg>
                </div>
              </div>
              <button className="py-1 px-3 text-white rounded" style={{ color: "#5f4bdb", backgroundColor: "#cdc7f6" }}>Apply Now</button>
            </div>
          </div>
        ))}
      </div>
      {/* Customer Section */}
      <div className='flex flex-col justify-center items-center mt-24'>
        <h1 className='text-3xl font-semibold mb-7'>What Our Customer Says</h1>
        <p className="text-xs text-center mx-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsam, ad est iure labore nobis 
          <br className="hidden sm:block" />ex consequuntur reiciendis iste dolores consectetur. Nam in illo eaque magni fugit explicabo quae esse!
        </p>
      </div>
      <div className="container mx-auto p-6 mt-16 flex flex-wrap">
        <div className="w-full sm:w-1/4 flex justify-center items-center mb-4 sm:mb-0">
          <img src={customer} alt="Profile" className="h-60 w-72" />
        </div>
        <div className="w-full sm:w-3/4 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-xl font-semibold">John Doe</h1>
              <p className="text-gray-600">Senior Developer</p>
            </div>
            <div className="flex items-center">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className={`h-5 w-5 ${i < 3 ? 'text-orange-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15l-5.09 2.58 1.18-6.88-5-4.87 6.91-1L10 .25 11.91 4.83 18.82 5l-5 4.87 1.18 6.88z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut repellendus libero id? Quod esse cum illum libero modi. Suscipit omnis eveniet cum laudantium doloremque eius enim id ad praesentium amet? Unde, omnis quisquam eveniet quia dolore debitis dolores recusandae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis cum distinctio mollitia repellat, hic dolores esse, amet porro obcaecati dolor minus odio enim assumenda tempore earum fugit nam a? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam laboriosam neque est maiores, possimus rem, voluptatibus tempora eligendi mollitia officia unde corrupti. Ex quis doloribus quia harum eius nihil a?
          </p>
          <div className="flex justify-end items-center">
            <div className="flex space-x-2">
              <button className="h-8 w-8 bg-gray-400 rounded-full flex justify-center items-center">
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
              </button>
              <button className="h-8 w-8 rounded-full flex justify-center items-center" style={{ backgroundColor: "#5f4bdb" }}>
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 17l5-5m0 0l-5-5m5 5H2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-48 mx-8 sm:mx-28 mt-20 rounded-lg mb-10 bg-gray-200 flex justify-center items-center overflow-hidden">
        <img src={rectangle} alt="Sample" className="h-full w-full object-cover" />
      </div>
      {/* Pricing Plan Section */}
      <div className="container mx-auto p-6  flex flex-wrap justify-center items-center text-center mt-4 mb-10 gap-4 max-w-screen-lg"> {/* Add max-w-screen-lg */}
  {[
    { plan: "Free", price: "$ 0", details: ["Lorem, ipsum dolor consectetur.", "Lorem ipsum dolor sit.", "Lorem, ipsum dolor adipisicing elit."] },
    { plan: "Premium", price: "$ 175", details: ["Lorem, ipsum dolor consectetur.", "Lorem ipsum dolor sit.", "Lorem, ipsum dolor adipisicing elit."] },
    { plan: "Platinum", price: "$ 500", details: ["Lorem, ipsum dolor consectetur.", "Lorem ipsum dolor sit.", "Lorem, ipsum dolor adipisicing elit."] },
  ].map((item, index) => (
    <div key={index} className="bg-white h-80 w-64 mx-2 relative shadow-xl mb-5 sm:mb-0 p-4 flex flex-col items-center"> {/* Fix width of each card */}
      <h1 className="text-2xl font-semibold ">{item.plan}</h1>
      <h1 className="text-2xl font-bold mt-2">{item.price}</h1>
      <p className="mt-2">per month</p>
      <ul className=" mt-2 space-y-2 text-left">
        {item.details.map((detail, idx) => (
          <li key={idx} className="flex items-center">
            <span className="h-2 w-2 bg-black rounded-full mr-2"></span>
            {detail}
          </li>
        ))}
      </ul>
      <button className="py-1 px-3 rounded mt-3" style={{ backgroundColor: index === 1 ? "#5f4bdb" : "#cdc7f6", color: index === 1 ? "white" : "#5f4bdb" }}>Learn more</button>
    </div>
  ))}
</div>

      
      {/* Latest News Section */}
<div className='flex flex-col justify-center items-center mt-24'>
  <h1 className='text-3xl font-semibold mb-7'>Latest News</h1>
  <p className="text-xs text-center mx-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsam, ad est iure labore nobis 
    <br className="hidden sm:block" />ex consequuntur reiciendis iste dolores consectetur. Nam in illo eaque magni fugit explicabo quae esse!
  </p>
</div>
<div className="container mx-auto p-6 mt-16 flex gap-6"> {/* Remove flex-wrap */}
  <div className="w-full sm:w-1/2 h-64 bg-gray-100 flex justify-center items-center rounded-xl relative">
    <div className="absolute bottom-10 left-4 sm:left-10">
      <h1 className="text-md font-bold">
        A media Critic Focuses on <br />
        the Crisis in local news
      </h1>
      <p className="text-xs">Lorem ipsum dolor sit.</p>
      <button className="py-2 px-4 bg-orange-500 text-white rounded mt-2">Peoples</button>
    </div>
  </div>
  <div className="w-full sm:w-1/2 h-64 bg-gray-100 flex justify-center items-center rounded-xl relative">
    <div className="absolute bottom-10 left-4 sm:left-10">
      <h1 className="text-md font-bold">
        A media Critic Focuses on <br />
        the Crisis in local news
      </h1>
      <p className="text-xs">Lorem ipsum dolor sit.</p>
      <button className="py-2 px-4 bg-orange-500 text-white rounded mt-2">Technology</button>
    </div>
  </div>
</div>

    </div>
  );
}

export default Features;
