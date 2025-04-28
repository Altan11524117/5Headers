import React from 'react';
import { useState, useEffect } from 'react';

function Header4() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
      const detectColorScheme = () => 
        {
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) 
            {
              setIsDarkMode(true);
            }
      
      else {
            setIsDarkMode(false);
       }
     };

    detectColorScheme();
    
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
            <nav
              className="fixed top-80 left-0 w-full z-50 transition-all duration-300"
              style={{
                backgroundColor: isDarkMode ? "#164e63" : "#ffffff",  
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",              
              }}   >
             
             
              <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                   
                <div className={isDarkMode ? "text-white font-bold text-xl" : "text-black font-bold text-xl"}>
                   BrandName
                 </div>
         
                <div className="flex items-center space-x-6">
                 
                  <div className={isDarkMode ? "text-white space-x-6" : "text-black space-x-6"}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
              </div>
         
        
                   <button
                      onClick={toggleDarkMode}
                     className="ml-4 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                         style={{
                                 backgroundColor: isDarkMode ? "#ffffff" : "#164e63",
                                 color: isDarkMode ? "#164e63" : "#ffffff",
                        }}   >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                   
                   
                   </button>
                  </div>
            </div>
      </nav>
  );
}

export default Header4;
