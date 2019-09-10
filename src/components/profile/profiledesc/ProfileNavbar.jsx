import React from 'react'
import './profileNavbar.css'

function ProfileNavbar({setTab}){
  function toggleTab(e){
    const elem = e.target
    if(elem.classList.contains("active")){
      elem.classList.remove("active")
      setTab("none")
    }
    else{
      let elem2 = document.querySelector('.active')
      if(elem2) elem2.classList.remove('active')
      elem.classList.add("active")
      setTab(elem.innerText)
    }
  }
  return (
    <nav class="profile-nav">
          <ul>
            <li onClick={toggleTab}>Descrption</li>
            <li onClick={toggleTab}>Services</li>
            <li onClick={toggleTab}>Reviews</li>
            <li onClick={toggleTab}>Gallery</li>
          </ul>
        </nav>
  )
}

export default ProfileNavbar