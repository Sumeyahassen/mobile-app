import React from 'react'

function Profile({firstName,lastName,age}) {
    const style={

        color:"red",
        fontSize:24
    }
  return (
    <div className='flex flex-col ' style={style}>
        <p className="">Full Name: {firstName} {lastName}</p>
        <p className="">Age:{age}</p>

    </div>
  )
}

export default Profile
