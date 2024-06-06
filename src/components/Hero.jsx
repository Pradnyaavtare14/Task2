// import React from 'react';
import home from '../assets/images/homeimg.png';
import logo from '../assets/images/logo.png';
import img2 from '../assets/images/howitworks.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
  return (
    <div>
      <div className="bg-blue-50 flex justify-center items-center min-h-[450px] relative">
        <div className="container mx-auto p-4">
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-28">
            {/* First flex box */}
            <div className="flex flex-col items-center lg:items-start justify-center p-6 lg:w-1/2">
              <h1 className='text-3xl sm:text-5xl font-bold text-center lg:text-left'>
                Find out <span style={{ color: "#5f4bdb" }}>talented <br className="hidden lg:block" />freelancer </span> with better <br className="hidden lg:block" />review faster
              </h1>
              <p className='mt-7 text-center lg:text-left'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, <br className="hidden lg:block" /> perferendis esse neque adipisci in temporibus corporis!
              </p>
              <div className='flex flex-row space-x-4 mt-7 justify-center lg:justify-start'>
                <button className='text-white py-2 px-4 rounded' style={{ backgroundColor: "#5f4bdb" }}>
                  <span>Discover Now</span>
                </button>
                <button className='text-blue-500 py-2 px-4 rounded border border-blue-500'>
                  <FontAwesomeIcon icon="fa-sharp fa-solid fa-circle-play" className="mr-2" />
                  <span>Watch Now</span>
                </button>
              </div>
            </div>
            {/* Second flex box */}
            <div className="flex items-center justify-center p-6 lg:w-1/2">
              <img src={home} alt="Home" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-6 mt-10 items-center'>
        {["Highlow", "Boosst", "emajine", "manhul", "GlowUP"].map((name, index) => (
          <h1 key={index} className='text-xl sm:text-2xl font-semibold' style={{ color: "#c9c9c9" }}>{name}</h1>
        ))}
      </div>
      {/* How it works */}
      <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-4 mt-28 p-4">
        {/* First flex box */}
        <div className="flex flex-col items-start justify-start lg:w-1/2">
          <h1 className='text-xs' style={{ color: "#5f4bdb" }}>How it works</h1>
          <h1 className='text-2xl sm:text-4xl font-semibold mt-7'>Start find a job you love<br />with us easily</h1>
          {/* Numbered steps with text and dropdowns */}
          <div className="mt-10 space-y-4">
            {["Complete Profile", "Search Vacancies", "Apply Jobs"].map((step, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className={`text-2xl font-bold text-blue-500 bg-pink-200 h-8 w-10 rounded-sm text-center flex items-center justify-center ${index === 1 ? 'bg-yellow-100' : ''} ${index === 2 ? 'bg-green-200' : ''}`}>{index + 1}</div>
                <div className="flex flex-col">
                  <select className="p-2 shadow-md border rounded">
                    <option value={`details${index + 1}`}>{step}</option>
                    <option value={`more-info${index + 1}`}>More info about step {index + 1}</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Second flex box */}
        <div className="flex items-center justify-center lg:w-1/2">
          <img src={img2} className="h-72 w-72 object-cover mt-28 lg:mt-0" alt="How it works" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-24 p-4'>
        <h1 className='text-3xl font-semibold'>Why Choose Us</h1>
        <p className='mt-5 text-center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, ad.
          <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, inventore?
        </p>
      </div>
      {/* Next column */}
      <div className="flex flex-wrap justify-center space-x-0 sm:space-x-10 mt-12 p-4">
        {["Trusted", "Easy to use", "Faster"].map((title, index) => (
          <div key={index} className="flex flex-col items-start shadow-lg h-52 w-64 mb-10 p-4">
            <img src={logo} alt="" className='h-10 mb-2' />
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p>
              This is the content of box {index + 1}.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
