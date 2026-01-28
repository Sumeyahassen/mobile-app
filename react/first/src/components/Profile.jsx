import React from 'react'

function Profile({firstName,lastName,age}) {
  return (
    <div className='flex flex-col'>
        <p className="">Full Name: {firstName} {lastName}</p>
        <p className="">Age:{age}</p>

    </div>
  )
}

export default Profile
