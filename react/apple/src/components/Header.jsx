import React, { useState } from "react";
import { FaSearch, FaApple } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import { IoIosClose } from "react-icons/io";
function Header() {
  const headers = [
    "store",
    "mack",
    "ipad",
    "iphone",
    "watch",
    "vision",
    "airpod",
    "tv&home",
    "entertament",
    "support",
  ];
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="hidden lg:flex justify-center items-center gap-10 py-3 bg-gray-50 text-gray-950">
        <FaApple className="text-gray-800" />
        {headers.map((link, index) => {
          return (
            <a href="#" key={index}>
              {link}
            </a>
          );
        })}
        <FaSearch className="text-gray-500" size={20} />
        <IoBag className="text-gray-500" size={20} />
      </div>
      {/* mobile view */}

      <div className="flex justify-between items-center py-3 px-5 ">
        <FaApple />
        {isOpen &&
          headers.map((link, index) => {
            <a className="flex flex-col h-auto w-full" key={index}>
              {link}
            </a>;
          })}
        <div className="flex justify-center gap-5">
          <FaSearch />
          <IoBag />
         <button
         onClick={()=>setOpen(!isOpen)}
         >
            {isOpen?<IoIosClose/>:<ImMenu/>}
         </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
