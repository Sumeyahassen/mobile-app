import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import mackpro from "../assets/mackpro.png";
function MackBook() {
  return (
    <div className=' flex flex-col  items-center py-10 bg-white h-screen '>
      <div className="text-gray-500 pt-10 text-xl capitalize">the next world of app</div>
      <div className="text-3xl sm:text-6xl text-black font-bold p-4">Mack Book Pro</div>
      <div className="">The best for the briteness</div>
      <div className="flex gap-3 py-5 text-blue-400 text-lg" >
        <a href="#" className='flex gap-2 justify-center items-center cursor-pointer'>detale <IoIosArrowForward/></a>
        <a href="#" className='flex gap-2 justify-center items-center cursor-pointer'>more <IoIosArrowForward/></a>
      </div>
      <img src={mackpro} alt="mack pro" className='h-auto w-auto'/>
    </div>
  )
}

export default MackBook
