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
        <div className="flex justify-center items-center gap-5 capitalize ">
          {headers.map((link, index) => {
            return (
              <a
              href={`# ${link}`}
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
        {/* mobile sidebare */}
{/* Mobile menu - shows only when isOpen is true */}
        {isOpen && (
          <div className="bg-green-500 px-6 py-4 flex flex-col gap-5 text-lg border-t border-gray-950 justify-center items-center capitalize">
            {headers.map((link, index) => (
              <a
                href="#"
                key={index}
                className="hover:text-gray-300 py-2"
                onClick={() => setOpen(false)} // close menu when link clicked
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
