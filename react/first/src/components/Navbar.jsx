import React from "react";
import  logo from "../assets/react.svg"
import { FaSearch } from "react-icons/fa";
function Navbar() {
  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400">
      <header
        className="flex justify-between items-center py-6 px-8 text-black
        md:px-32 bg-white drop-shadow-md
        "
      >
        {/* logo */}
        <a href="#" className="">
            <img src={logo} alt="" className="w-12 hover:scale-105 transition-all" />
        </a>
        {/* links */}
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
<li className="p-3 hover:bg-sky-400 hover:text-white">Home</li>
<li className="p-3  hover:bg-sky-400 hover:text-white">Servise</li>
<li className="p-3  hover:bg-sky-400 hover:text-white">Prodact</li>
<li className="p-3  hover:bg-sky-400 hover:text-white">Contact</li>
        </ul>
        <div className=" hidden sm:flex justify-center gap-3 relative ">
            <FaSearch className="text-gray-300 relative left-10 top-1 right-0 bottom-0  "/>
            <input type="text" placeholder="search....."
            className="placeholder:text-lg font-medium placeholder:text-center w-sm" />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
