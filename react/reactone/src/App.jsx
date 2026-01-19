import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
  <div className='flex justify-between px-3 py-3 h-12 bg-red-300'>
    {/* logo */}
<div className="">logo</div>
{/* navigation */}
{/* how to response the navgation bare */}
{/* desktop */}
<div className="hidden sm:flex-col  md:flex gap-2">
  <samp className=''>home</samp>
  <samp className=''>about</samp>
  <samp className=''>servise</samp>
  <samp className=''>contact</samp>
</div>
<div className="md:hidden">X</div>
{/* <div className="flex flex-row gap-2">
  <samp className=''>home</samp>
  <samp className=''>about</samp>
  <samp className=''>servise</samp>
  <samp className=''>contact</samp>
</div> */}


{/* gride in tailwind css */}

 </div>
 <div className="grid grid-cols-4 gap-5 px-10 py-10">
  <div className="h-12 w-20 bg-yellow-500 hover:scale-105 transition-all duration-700"></div>
  <div className="h-12 w-10 bg-green-500 hover:bg-green-900"></div>
  <div className="h-12 w-10 bg-blue-500"></div>
  <div className="h-12 w-10 bg-pink-500"></div>
  <div className="h-12 w-10 bg-orange-500"></div>
  <div className="h-12 w-10 bg-sky-500"></div>
  <div className="h-12 w-10 bg-lime-500"></div>
  <div className="h-12 w-10 bg-pink-500"></div>
  <div className="h-12 w-10 bg-red-500"></div>
  <div className="h-12 w-10 bg-purple-500"></div>
  <div className="h-12 w-10 bg-teal-500"></div>
  <div className="h-12 w-10 bg-zinc-500"></div>
</div>
 </div>
  );
}

export default App
