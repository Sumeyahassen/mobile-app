import React from 'react'
const Title=()=>{
  return(
    <div className="">
      title component
    </div>
  )
}
const App = () => {
  return (
    <div className='bg-red-500'>
      <Title/>
      <Title/>
    </div>
  )
}

export default App
