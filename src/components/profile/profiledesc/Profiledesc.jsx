import React,{useState} from 'react'
import ProfileNavbar from './ProfileNavbar'
import UserDetails from './UserDetails'
import TabHandler from './TabHandler'
import './profiledesc.css'

function Profiledesc(){
  let [currTab,setTab] = useState("")
  
  return (
    <div class="profile-main-flex-item pd-30">
      <div class="profile-description">
      <div class="profile-title">
            <div class="fake-box">
              <h2>Vendor Title</h2>
            </div>
            <h3>Photographer - Mysore</h3>
          </div>

      <ProfileNavbar setTab={setTab} />
      <TabHandler tab={currTab}/>
      <UserDetails/>
      </div>
    </div>
  )
}

export default Profiledesc