// import React from 'react';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="shadow-md dark:text-black">
      <div className='container mx-auto py-3'>
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 ml-4 sm:ml-10" />
            <a href="#" className="text-xs sm:text-lg flex gap-2 ml-2">
              Ziro
            </a>
          </div>
          <div className="flex flex-wrap space-x-4 sm:space-x-6 mt-2 sm:mt-0 items-center">
            <a href="#" className="text-xs sm:text-lg">Home</a>
            <a href="#" className="text-xs sm:text-lg">Pricing</a>
            <a href="#" className="text-xs sm:text-lg">Blog</a>
            <a href="#" className="text-xs sm:text-lg">Become a member</a>
            <div className="relative">
              <input 
                type="text" 
                className="text-xs sm:text-lg py-1 px-2 rounded" 
                placeholder="Search..."
                style={{ paddingRight: '2rem' }}
              />
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <button className="text-xs sm:text-lg py-1 px-2 rounded bg-gray-200">
              <span>Log in</span>
            </button>
            <button className="text-xs sm:text-lg py-1 px-2 rounded" style={{ backgroundColor: '#5f4bdb', color: 'white' }}>
              <span>Sign up</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
