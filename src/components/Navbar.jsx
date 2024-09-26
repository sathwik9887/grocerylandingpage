import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.png';
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(prev => !prev);
  };

  const menuItems = [
    { item: 'Home' },
    { item: 'About' },
    { item: 'Features' },
    { item: 'Contact' }
  ];
  
  return (
    <div className='flex justify-between items-center lg:px-40 py-4 px-10 overflow-hidden'>
      <img src={Logo} alt="Logo" className='lg:w-48 w-28 h-auto' />
      
      
      <ul className={`hidden lg:flex justify-center items-center text-white space-x-8 lg:space-x-16`}>
        {menuItems.map((menu, index) => (
          <li key={index} className='cursor-pointer font-semibold'>
            {menu.item}
          </li>
        ))}
      </ul>

      
      <button className='px-3 text-white lg:hidden focus:outline-none' onClick={handleToggle}>
        {isNavOpen ? <LuX size={25} /> : <LuMenu size={25} />}
      </button>
      
      <div>
        <img src={Cart} alt="Cart" className='w-8 h-8 lg:w-10 lg:h-10' />
      </div>

      
      {isNavOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-full h-full text-lg text-white transition-transform duration-700 transform bg-black shadow-2xl">
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="space-y-4">
              {menuItems.map((menu, index) => (
                <li key={index} className='cursor-pointer font-semibold'>
                  {menu.item}
                </li>
              ))}
            </ul>
            <button onClick={handleToggle} className="absolute top-4 right-4 text-3xl text-red-600">
              <LuX />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
