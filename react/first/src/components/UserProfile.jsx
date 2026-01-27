import React from 'react'

function UserProfile(props) {
    // - avatar (URL)
// - name
// - bio
// - location
// - skills (array)
// - contactInfo (object with email, phone, etc.)
  return (
    <div>
<div className="">Name:{props.name}</div>
<div className="">Avatar:{props.avator}</div>
<div className="">Bio: {props.bio}</div>
<div className="">Location:{props.location}</div>
<div className="">Skills:{props.skills.map((skil)=>{
    return(
        <span key={index}>{skil}</span>
    )
})}</div>
<div className="">Contact Information:{props.contacts.map((contact)=>{
    return(
        <div className="" key={index}>{contact}</div>
    )
})}</div>

    </div>
  )
}

export default UserProfile
