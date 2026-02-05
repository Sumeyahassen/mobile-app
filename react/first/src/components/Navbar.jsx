import React, { useState } from "react";
import logo from "../assets/react.svg";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
function Navbar() {
  const [open,setOpen]=useState(false);
  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400">
      <header
        className="flex flex-col-3 sm:flex justify-between items-center py-6 px-8 text-black
        md:px-32 bg-white drop-shadow-md
        "
      >
        {/* logo */}
        <a href="#" className="">
          <img
            src={logo}
            alt=""
            className="w-12 hover:scale-105 transition-all"
          />
        </a>
        {/* links */}
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-sky-400 rounded-sm hover:text-white">
            Home
          </li>
          <li className="p-3  hover:bg-sky-400 rounded-sm hover:text-white">
            Servise
          </li>
          <li className="p-3  hover:bg-sky-400 rounded-sm hover:text-white">
            Prodact
          </li>
          <li className="p-3  hover:bg-sky-400 rounded-sm hover:text-white">
            Contact
          </li>
        </ul>
        <div className=" hidden sm:flex justify-center gap-3 relative ">
          <FaSearch
            size={25}
            className="text-gray-300 relative left-12 top-2 right-0 bottom-0  "
          />
          <input
            type="text"
            placeholder="search....."
            className=" rounded-2xl border-blue-400 focus:border-blue-400 bg-gray-100 py-2 px-3 placeholder:text-lg font-medium placeholder:text-center w-sm"
          />
        </div>
        {/* mobile and laptop */}

              <ul className="block  sm:hidden">
          <li className="p-3 hover:bg-sky-400 rounded-sm hover:text-white">
            Home
          </li>
          <li className="p-3  hover:bg-sky-400 rounded-sm hover:text-white">
            Servise
          </li>
          <li className="p-3  hover:bg-sky-400 rounded-sm hover:text-white">
            Prodact
          </li>
          <li className="p-3  hover:bg-sky-400 rounded-sm hover:text-white">
            Contact
          </li>
        </ul>

        {/* menu bar */}
        <div className=" ">
          <FiMenu
        //   onClick={}
          size={50} className="cursor-pointer sm:hidden " />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
