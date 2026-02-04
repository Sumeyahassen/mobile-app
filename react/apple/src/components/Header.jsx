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
    <div className="">
      {/* for desktope */}
      <div className="hidden lg:flex justify-center gap-10 items-center py-5 px-5 bg-gray-50">
        <FaApple />
        <div className="flex justify-center items-center gap-5 ">
          {headers.map((link, index) => {
            return (
              <a
              href="#"
              className="cursor-pointer text-lg " key={index}>
                {link}
              </a>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-10">
          <FaSearch />
          <IoBag />
        </div>
      </div>
      <div className="">
        {/* for mobile and desctope */}
        <div className="flex justify-between py-5 px-10 lg:hidden">
          <FaApple/>
          <div className="flex flex-col ">
            {headers.map((link,index)=>{
              return(
                <a key={index}>
                  {link}
                </a>
              )
            })}
          </div>
          <div className="flex gap-10">
            <FaSearch/>
            <IoBag/>
            <button
            className="flex "
              onClick={()=>setOpen(!isOpen)}>
              {isOpen?<IoIosClose/>:<ImMenu/>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
