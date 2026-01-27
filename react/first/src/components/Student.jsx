import React from 'react'

function Student(props) {
    // to practes react propes
  return (
    <div>
<p className="">
  Name:{props.name}
</p>
<p className="">
  Age:{props.age}
</p>
<p className="">
  is Student: {props.isStudent? "yap":"nah"}
</p>
    </div>
  )
}

export default Student
