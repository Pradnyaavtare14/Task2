import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-md bg-white">
      <div className="container mx-auto py-3 px-4 lg:px-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 ml-2 sm:ml-4" />
            <a href="#" className="text-lg font-bold ml-2">
              Ziro
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-xs lg:text-lg">Home</a>
            <a href="#" className="text-xs lg:text-lg">Pricing</a>
            <a href="#" className="text-xs lg:text-lg">Blog</a>
            <a href="#" className="text-xs lg:text-lg">Become a member</a>
            <button className="text-xs lg:text-lg py-1 px-2 rounded bg-gray-200">
              Log in
            </button>
            <button className="text-xs lg:text-lg py-1 px-2 rounded bg-purple-600 text-white">
              Sign up
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative hidden lg:block">
              <input 
                type="text" 
                className="text-xs lg:text-lg py-1 px-2 rounded bg-gray-100 border border-gray-300"
                placeholder="Search..."
                style={{ paddingRight: '2rem' }}
              />
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <button 
              className="lg:hidden text-gray-600 focus:outline-none" 
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <a href="#" className="block text-center text-sm">Home</a>
            <a href="#" className="block text-center text-sm">Pricing</a>
            <a href="#" className="block text-center text-sm">Blog</a>
            <a href="#" className="block text-center text-sm">Become a member</a>
            <button className="block text-center text-sm py-1 px-2 rounded bg-gray-200 w-full">
              Log in
            </button>
            <button className="block text-center text-sm py-1 px-2 rounded bg-purple-600 text-white w-full">
              Sign up
            </button>
            <div className="relative px-4">
              <input 
                type="text" 
                className="text-sm py-1 px-2 rounded bg-gray-100 border border-gray-300 w-full"
                placeholder="Search..."
                style={{ paddingRight: '2rem' }}
              />
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
