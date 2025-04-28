import React from 'react'
import logo from '../assets/logo2.svg'
import { useState } from 'react';

function Header2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
                              setIsMenuOpen(!isMenuOpen);
  
    };
      return (
     <>
      {/*You should add these to the header classname that you will integrate into the web page so that it can remain at the top */}
      {/* absolute top-0 left-0  */}
   <header className='  fixed w-full flex justify-between items-center   bg-gradient-to-r from-cyan-900 to-blue-200  backdrop-blur-md py-6 px-8 mdpx-32 z-50  top-24 left-0 '>
               
         {/*LOGO*/}
     <a href="#" className=''>
        {/* We pull the logos from the assets file, we used dots twice because our codes are from the component file. */}
        <img src={logo} alt="logo" className='w-52 hover:scale-105    transition-all duration-300'/>
     </a>
         

    {/* NAVABR */}
           
     <ul className="hidden xl:flex items-center gap-12 font-semibold text-base ">
   {/*I tried navbar like this this time, I have no idea which one I should use, it can also be taken from the 1st project.*/}
  <li>
      <a href="#" className="p-3 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 rounded-md cursor-pointer">
      Home </a>
  </li>

  <li>
    <a href="#" className="p-3 hover:bg-gradient-to-r hover:from-cyan-700  hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 rounded-md cursor-pointer">
      About </a>
  </li>

  <li>
    <a href="#" className="p-3 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 rounded-md cursor-pointer">
      Services      </a>
  </li>

  <li>
    <a href="#" className="p-3 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 rounded-md cursor-pointer">
      Contact  </a>
  </li>

     </ul>

   
    {/* Search*/}
     <div className="relative hidden md:flex items-center justify-center gap-3">
         {/*Search item was used to import boxitem.com in the html page */}
    <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
    <input 
        type="text" 
        placeholder="Search..." 
        className="py-2 pl-10 pr-4 rounded-xl border-2 border-blue-300 focus:outline-none focus:ring-2
         focus:bg-gray-100 focus:border-transparent"
    />
     </div>


 
      <div className='xl:hidden'>
        {/*It wasn't visible when I was on the desktop inside <i>, so I put it inside <div>*/}
             <i 
          className="bx bx-menu text-3xl cursor-pointer "
          onClick={toggleMenu}
        >

        </i>

    </div>
   <div 
          className={`absolute top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'} xl:hidden`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
           <ul className="list-none w-full text-center ">
   
  <li>
      <a href="#" className="p-4 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 rounded-md cursor-pointer">
      Home </a>
  </li><br />

  <li>
    <a href="#" className="p-4 hover:bg-gradient-to-r hover:from-cyan-700  hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 rounded-md cursor-pointer">
      About </a>
  </li><br />

  <li>
    <a href="#" className="p-4 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 rounded-md cursor-pointer">
      Services      </a>
  </li><br />

  <li>
    <a href="#" className="p-4 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 rounded-md cursor-pointer">
      Contact  </a>
  </li>

     </ul>
        </div>



   </header>

 



   </>
  )
}

export default Header2