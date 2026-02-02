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
      <div className="flex justify-between lg:hidden px-10">
        <FaApple className="text-gray-800" />
        <div className="flex gap-5">
          <FaSearch className="text-gray-500" />
          <IoBag className="text-gray-500" />
          <button onClick={() => setOpen} className=" lg:hidden">
            <ImMenu />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
