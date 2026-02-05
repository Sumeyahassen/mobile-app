// src/components/Sidebar.jsx
import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
// { chats, onNewChat }
const Sidebar = () => {
  const chats = [
    "what is ai",
    "what is google",
    "what is chatgpi",
  ];
  return (
    <div className="hidden sm:flex flex-col px-10 py-5 bg-gray-100 w-1/5 h-screen  items-center">
      {/* add new chate button */}
      <button className="flex justify-center items-center gap-5 text-xl">
        New Chat
        <IoIosAddCircleOutline size={40} />
      </button>
      <div className="">
        {chats.map((chat, index) => {
          <a key={index}> {chat}</a>;
        })}
      </div>
      
    </div>
  );
};

export default Sidebar;
