import React, { useState } from 'react'

function Header() {
    const [isMenu,setMenu]=useState(false);
    const open=()=>{
        setMenu(!isMenu);
    }
  return (
    <div className='flex justify-between items-center bg-amber-600 h-16 px-5 absolute top-0 bottom-0 left-0 right-0 w-full '>
      {/* logo */}
      <div className="">React Class</div>
      <div className="sm:hidden cursor-pointer" onClick={open}>{isMenu?"X":"☰"}</div>
      {/* navbar */}
      {/* desktop menu */}
      <nav className='hidden sm:flex justify-between gap-4'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Servise</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </nav>
        {/* mobile menu */}
        {isMenu && <nav className='flex flex-col justify-between gap-4 min-h-min sm:hidden absolute top-16 left-1/2 pt-4 bg-amber-400 '>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Servise</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </nav>}

    </div>
  )
}

export default Header
