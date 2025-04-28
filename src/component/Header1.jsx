import React from 'react';
import Logo from '../assets/logo.png';



function  Header1() {
  const NavbarLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' }
  ];

  return (
    <nav className="bg-cyan-800 p-4 backdrop-blur-md flex items-center justify-between  top-0 left-0">

      {/* Logo and Brandname */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="logo" className="rounded-full w-10 h-auto" />
        <a href="#home" className="text-lg font-semibold text-white hover:underline hover:text-cyan-100 transition-all duration-300">
          BrandName
        </a>
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-4 items-center">
        {NavbarLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-white text-lg hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Sign in Button */}
      <button className="bg-cyan-600 backdrop-blur-md text-white px-4 py-2 rounded-xl hover:bg-cyan-700">
        Sign In
      </button>

    </nav>
  );
}

export default Header1;