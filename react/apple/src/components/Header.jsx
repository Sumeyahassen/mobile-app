import React from 'react'
import { FaSearch,FaApple } from 'react-icons/fa'
import { IoBag } from "react-icons/io5";
function Header() {
    const headers=[<FaApple className='text-gray-800'/>,
        "store","mack","ipad","iphone","watch","vision","airpod","tv&home","entertament","support",
        <FaSearch className='text-gray-500'/>,<IoBag className='text-gray-500'/>]
  return (
    <div>
        <div className="flex justify-center items-center gap-7 py-5 font-medium bg-gray-50 text-gray-900">
            {headers.map((link,index)=>{
                return (
                <a key={index}>{link}</a>
                )
            })}
        </div>

    </div>
  )
}


export default Header
