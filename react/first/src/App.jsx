import React from 'react'
const Title=()=>{
  console.log("title component renderd")
  return(
    <div className="">
      title component
    </div>
  )
}
const Description=()=>{
  console.log("description component renderd")
return(
  <div className="">
    it is the first  react app developemnt class
  </div>
)
}
const App = () => {
  return (
    <div className='bg-red-500'>
      <Title/>
      <Title/>
      <Description/>
    </div>
  )
}

export default App
