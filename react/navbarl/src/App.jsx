import { useState } from 'react'


function App() {
  const name=prompt("Enter your Name: ")

  return (
    <div className='min-h-screen'>
     {/* <div className='text-red-500'>your Name is {name}</div> */}
     <div className='flex items-center justify-between gap-10 bg-slate-900 text-slate-50 '>
      {/* for logo */}
      <div>logo</div>
      {/* for pages */}
      <div className=' flex flex-col  justify-end '>
        <span>Home</span>
        <span>About</span>
        <span>Servise</span>
        <span>Contact</span>
      </div>
     </div>
    </div>
  )
}

export default App
