import React from 'react'
import './profile.css'
import ProfilePic from './profilepic/ProfilePic'
import Profiledesc from './profiledesc/Profiledesc'

function Profile(){
  return(
    <section id="profile-main">
      <div className="profile-main-flex-container">
        <ProfilePic/>
        <Profiledesc/>
      </div>
    </section>
  )
}

export default Profile