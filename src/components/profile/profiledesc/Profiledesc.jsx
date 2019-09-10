import React from 'react'
import ProfileNavbar from './ProfileNavbar'
import UserDetails from './UserDetails'
import './profiledesc.css'

function Profiledesc(){
  return (
    <div class="profile-main-flex-item pd-30">
      <div class="profile-description">
      <div class="profile-title">
            <div class="fake-box">
              <h2>Vendor Title</h2>
            </div>
            <h3>Photographer - Mysore</h3>
          </div>
      </div>
      <ProfileNavbar/>
      <UserDetails/>
    </div>
  )
}

export default Profiledesc