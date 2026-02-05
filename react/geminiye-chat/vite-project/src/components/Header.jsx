// src/components/Header.jsx
import React from 'react';
import { RiGeminiFill } from "react-icons/ri";
const Header = () => {
  return (
   <header className='bg-gray-100 flex justify-between items-center px-6 py-3'>
    {/* for laft side */}
    <div className="">
        <RiGeminiFill
        size={50}
        className='text-blue-500'
        />
        <div className="">Gemini AI</div>
    </div>
    {/* center contenet */}
    <div className="">
        <h3 className='text-lg font-semibold'>Changer of the World</h3>
    </div>
    {/* for right side */}
    <div className="">
    <div className="h-20 w-20 bg-gray-500 rounded-full placeholder:S"></div>
    </div>
   </header>
  );
};

export default Header;