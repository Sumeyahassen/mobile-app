import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
function MackBook() {
  return (
    <div className=' flex flex-col  items-center py-10 bg-gray-300 h-screen '>
      <div className="text-gray-500 pt-10 text-xl capitalize">the next world of app</div>
      <div className="text-6xl text-black font-bold p-4">Mack Book Pro</div>
      <div className="">The best for the briteness</div>
      <div className="flex gap-3">
        <a href="" className='flex justify-center items-center'>detale <IoIosArrowForward/></a>
        <a href="" className='flex justify-center items-center'>more <IoIosArrowForward/></a>
      </div>
    </div>
  )
}

export default MackBook
