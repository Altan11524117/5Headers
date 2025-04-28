import React, { useState, useEffect } from 'react';
import logo from '../assets/cplogo.jpg';
import headerbackground2 from '../assets/hdbg2.jpg';
import cpright from '../assets/rightcp.png';

function Header3() {
  const NavbarLinks = [
    { href: '#myprofile', label: 'My Profile' },
    { href: '#aboutme', label: 'About Me' },
    { href: '#touch', label: 'Touch' }
  ];

  const [isRotated, setIsRotated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    if (window.innerWidth >= 768) {
      setIsRotated(prev => !prev);
    } else {
      setMenuOpen(prev => !prev);
    }
  };

  // Ekran boyutu değişince hamburger menüyü kapat
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Temizlik (component unmount olunca eventListener'ı kaldır)
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className="top-36 left-0 w-full flex justify-between items-center bg-no-repeat bg-cover relative z-50 h-20"
      style={{ backgroundImage: `url(${headerbackground2})` }}
    >
      {/* LOGO */}
      <a href="https://github.com/Altan11524117" className="flex gap-8 items-center">
        <img src={logo} alt="logo" className="rounded-full w-12 h-auto hover:scale-105 transition-all duration-300" />
        <p className="w-full text-center text-amber-50 text-2xl hover:scale-105 transition-all duration-300">
          My Name
        </p>
      </a>

      {/* NAVBAR */}
      <nav className="hidden md:flex space-x-8 items-center gap-12 font-semibold text-base">
        {NavbarLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-white text-lg"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="relative">
  <img
    src={cpright}
    alt="Logo"
    onClick={handleClick}
    className={`w-12 h-auto cursor-pointer transition-all duration-500 hover:scale-105 ${isRotated ? 'rotate-360' : 'rotate-0'}`}
  />
  
  {menuOpen && (
    <div
      className="absolute top-full  -left-36  right-0 mt-4 p-8 shadow-lg flex flex-col items-center gap-4 z-50 max-w-[value]"
      style={{ backgroundImage: `url(${headerbackground2})` }}
    >
      <ul className="flex flex-col items-center gap-6 w-full text-center">
        {NavbarLinks.map((link, index) => (
          <li key={index} className="w-full">
            <a
              href={link.href}
              className="block p-4 text-white text-xl font-semibold hover:scale-105 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

      
    </header>
  );
}

export default Header3;
