import React, { useEffect, useState } from 'react'

function Useeffect() {
    const [count,setCount]=useState(0);
const incriment=()=>{
setCount(c=>c+1)
}
const decriment=()=>{
setCount(c=>c-1)
}
useEffect(()=>{
    document.title=`count ${count}`
});

  return (
    <div className='flex flex-col gap-5 w-xl'>
counter is count {count} times
<br />
<button className='bg-green-500 px-1 py-2 m-10' onClick={incriment}>Incriment</button>
<button className='bg-red-500 px-1 py-2 m-10' onClick={decriment}>Decriment</button>
    </div>
  )
}

export default Useeffect
