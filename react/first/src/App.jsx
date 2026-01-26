import React from 'react'
const Title=(props)=>{
  // props is in component is the agriment of this function
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
const Message=(props)=>{
  console.log(props)
  return <div className="">

  </div>
}
const App = () => {
  // the main component are parent
  return (
    <div className=''>
      {/* render component arae  chiled  */}
      {/* <Title/>
      <Title/>
      <Description/> */}
      <Message/>
    </div>
  )
}

export default App
