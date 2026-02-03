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
        <FaSearch className="text-gray-500" />
        <IoBag className="text-gray-500" />
      </div>
      {/* mobile view */}
      <div className="flex justify-between items-center lg:hidden px-10 py-3">
        <FaApple className="text-gray-800" />
        <div className="flex gap-5">
          <FaSearch className="text-gray-500" />
          <IoBag className="text-gray-500" />
          <button onClick={() => setOpen(!isOpen)} className=" lg:hidden">
            {isOpen?<IoIosClose/>:<ImMenu/>}
          </button>
        </div>
     <div className="bg-green-300 lg:hidden">
           {isOpen&&(
            headers.map((link,index)=>{
                <a key={index}>link</a>
            })

        )}

     </div>
      </div>
      <div className="flex flex-col bg-amber-300 h-screen py-6 items-center gap-3.5 justify-end">
        <div className="">home</div>
        <div className="">about</div>
        <div className="">servise</div>
        <div className="">contact</div>
        <div className="">project</div>
      </div>
    </div>
  );
}

export default Header;
