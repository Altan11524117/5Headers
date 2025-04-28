import React from 'react'
import { useState, useEffect } from "react";

function Header5() {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;

           const docHeight = document.body.scrollHeight - window.innerHeight; 
        const scrollProgress = scrollTop / docHeight; 
  
       
        setOpacity(Math.min(scrollProgress, 1)); 
      };
  
       window.addEventListener("scroll", handleScroll);
  
      return () => {
                      window.removeEventListener("scroll", handleScroll);
                   };
    }, []);
  
    return (

        <nav
        className="fixed  w-full z-10 transition-all duration-300 top-96 left-0  min-h-screen"
        style={{
                 backgroundColor: `rgba(22 , 78 , 99 , ${opacity})`, 
                 boxShadow: opacity > 0.1 ? "0 2px 10px rgba(0,0,0,0.3)" : "none",
            }}    >
        
        
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
          <div className="text-black font-bold text-xl">BrandName</div>
        
        
        
          <div className="space-x-6 text-black">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>


)
}


export default Header5;