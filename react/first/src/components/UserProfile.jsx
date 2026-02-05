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
<div className="">Avatar:{props.avatar}</div>
<div className="">Bio: {props.bio}</div>
<div className="">Location:{props.location}</div>
<div className="">Skills:{props.skills.map((skil,index)=>{
    return(
        <span key={index}>{skil},</span>
    )
})}</div>
<div className="">
    email:{props.contacts.email}
    phone:{props.contacts.phone}
</div>


</div>
  )
}

export default UserProfile
