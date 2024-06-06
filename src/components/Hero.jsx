// import React from 'react'

// import { width } from "@fortawesome/free-solid-svg-icons/fa0";

import home from '../assets/images/homeimg.png'
import logo from '../assets/images/logo.png'
import img2 from '../assets/images/howitworks.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Hero = () => {
    return (
      <div>
        <div  className="bg-blue-50 flex justify-center items-center  min-h-[450px] sm:min-h-[450px] relative">
             <div className="container mx-auto p-4">
        <div className="flex  justify-center items-center space-x-4 mt-28">
          {/* First flex box */}
          <div className="flex flex-col items-center justify-center p-6  h-96 ">
            <h1 className='text-5xl font-bold '> Find out <span style={{color:"#5f4bdb"}}>talented <br />freelancer </span> with better <br />review faster</h1>
            <p className='mt-7 justify-start'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, <br /> perferendis esse neque adipisci in temporibus corporis !</p>
           <div className='flex-row space-x-4'>  <button className=' mt-7  text-white py-2 px-4 rounded'  style={{backgroundColor:"#5f4bdb"}}> <span>Discover Now</span> </button>
           <button className=' mt-7  text-white py-2 px-4 rounded'  style={{color:"#5f4bdb"}}> <FontAwesomeIcon icon="fa-sharp fa-solid fa-circle-play" />Watch Now </button>
           </div>
           
          </div>
          {/* Second flex box */}
          <div className="flex items-center justify-center p-6 h-96 ">
            <p className="text-lg font-semibold">
              <img src={home} />
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className='flex flex-grow gap-28 mt-10 items-center justify-center'>
        <h1 className='text-2xl font-semibold' style={{color:"#c9c9c9"}}>Highlow</h1>
        <h1 className='text-2xl font-semibold' style={{color:"#c9c9c9"}}>Boosst</h1>
        <h1 className='text-2xl font-semibold' style={{color:"#c9c9c9"}}>emajine</h1>
        <h1 className='text-2xl font-semibold' style={{color:"#c9c9c9"}}>manhul</h1>
        <h1 className='text-2xl font-semibold' style={{color:"#c9c9c9"}}>GlowUP</h1>

      </div>
      {/* how it works */}
      <div className="flex justify-center items-center space-x-4">
  {/* First flex box */}
  <div className="flex flex-col items-start justify-start p-6">
    <h1 className='text-xs mt-28' style={{color:"#5f4bdb"}}>How it works</h1>
    <h1 className='text-4xl font-semibold mt-7 justify-start'>Start find a job you love<br />with us easily</h1>

    {/* Numbered steps with text and dropdowns */}
    <div className="mt-10 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="text-2xl font-bold text-blue-500 bg-pink-200 h-8 w-10 rounded-sm text-center">1</div>
        <div className="flex flex-col">
          <select className=" p-2  shadow-md border rounded">
            <option value="details1">Complete Profile</option>
            <option value="more-info1">More info about step 1</option>
          </select>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="text-2xl font-bold text-blue-500  bg-yellow-100 h-8 w-10 rounded-sm text-center">2</div>
        <div className="flex flex-col">
         
          <select className=" p-2  shadow-md border rounded">
            <option value="details2">Search Vacancies </option>
            <option value="more-info2">More info about step 2</option>
          </select>
        </div>
      </div>

      <div className="flex items-start space-x-2">
        <div className="text-2xl font-bold text-blue-500  bg-green-200 h-8 w-10 rounded-sm text-center">3</div>
        <div className="flex flex-col">
         
          <select className=" p-2  shadow-md border rounded">
            <option value="details2">Apply Jobs </option>
            <option value="more-info2">More info about step 2</option>
          </select>
        </div>
      </div>
      
    </div>
  </div>

          {/* Second flex box */}
          <div className="flex  items-center">
  <p >
    <img src={img2} className="h-72 w-72 object-cover mt-28 space-x-10" alt="Image description" />
  </p>
</div>
        </div>
        <div className='flex flex-col justify-center items-center mt-24'>
          <h1 className='text-3xl font-semibold'>Why Choose Us</h1>
          <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, ad.
          <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, inventore?</p>
          </div>
             {/* next column */}
        <div className="flex justify-center space-x-40 mt-12">
          
          {/* First flex box */}
          <div className="flex flex-col items-start  shadow-lg h-52 w-64 mb-10">
            <img src={logo} alt="" className='h-10'/>
            <h2 className="text-lg font-semibold ">Trusted</h2>
            <p>This is the content of box 1.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
          
          {/* Second flex box */}
          <div className="flex flex-col items-start  shadow-lg h-52 w-64 mb-10">
          <img src={logo} alt="" className='h-10'/>
            <h2 className="text-lg font-semibold">Easy to use</h2>
            <p>This is the content of box 2.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
          
          {/* Third flex box */}
          <div className="flex flex-col items-start  shadow-lg h-52 w-64 mb-10">
          <img src={logo} alt="" className='h-10'/>
            <h2 className="text-lg font-semibold">Faster</h2>
            <p>This is the content of box 3.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
        </div>
        
       

      </div>
     
    )
  }
  
  export default Hero;
  