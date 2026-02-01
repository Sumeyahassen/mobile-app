import React, { useEffect, useState } from 'react'

function Useeffect() {
    const [count,setCount]=useState(0);
    const [color,setColor]=useState("pink")
const incriment=()=>{
setCount(c=>c+1)
}
const decriment=()=>{
setCount(c=>c-1)
}
const changecolor=()=>{
    setColor(color==="pink"?"yellow":"pink")
}
useEffect(()=>{
    document.title=`count ${count}`
},[changecolor]);

  return (
    <div className='flex flex-col gap-5 w-xl'>
<div
style={{color:color}}
>
    counter is count {count} times
</div>
<br />
<button className='bg-green-500 px-1 py-2 m-10' onClick={incriment}>Incriment</button>
<button className='bg-red-500 px-1 py-2 m-10' onClick={decriment}>Decriment</button>
<button onClick={changecolor}>change color</button>
    </div>
  )
}

export default Useeffect
