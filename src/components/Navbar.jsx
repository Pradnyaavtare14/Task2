// import React from 'react';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="shadow-md dark:text-black">
      <div className='container py-3 sm:py-0'>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 ml-10" />
            <a href="#" className="text-xs sm:text-lg flex gap-2 ml-2 top-20">
              Ziro
            </a>
          </div>
          <div className="flex space-x-6 mr-28 items-center mt-2">
            <a href="#" className="text-xs sm:text-lg top-20">Home</a>
            <a href="#" className="text-xs sm:text-lg top-20">Pricing</a>
            <a href="#" className="text-xs sm:text-lg top-20">Blog</a>
            <a href="#" className="text-xs sm:text-lg top-20">Become a member</a>
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
            <button style={{ backgroundColor: '#d7e4f6' }} className="text-xs sm:text-lg py-1 px-2 rounded top-20">
              <span>Log in</span>
            </button>
            <button style={{ backgroundColor: '#5f4bdb' }} className="text-xs sm:text-lg py-1 px-2 rounded top-20">
              <span>Sign up</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
