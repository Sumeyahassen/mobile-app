import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center bg-amber-600 h-16 px-5'>
      {/* logo */}
      <div className="">React Class</div>
      {/* navbar */}
      <nav className='flex justify-between gap-4'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Servise</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </nav>
    </div>
  )
}

export default Header
