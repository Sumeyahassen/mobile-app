import React, { useState } from 'react'
import Edit from './Edit'

const [Task,setTask]=useState("")
function Input() {
    const addTask=()=>{
        

    }
  return (
   <div className="">
     <div className=' flex justify-center items-center pt-10 gap-3'>
      <input type="text"
      value={setTask}
      placeholder='Add To Day Task'
      className='border-2 py-3 rounded-sm border-amber-700  w-1/3 placeholder:text-center' />
      <button
      className='bg-green-500 text-white px-16 py-3 rounded-lg'
      onClick={addTask} >Add Task</button>
    </div>
    <Edit/>
   </div>
  )
}

export default Input
