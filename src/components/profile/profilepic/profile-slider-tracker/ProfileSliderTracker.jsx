import React from 'react'
import './profile-slider-tracker.css'

function ProfileSliderTracker({pictureSourceArray,currentPic,setCurrentPic}){
  return (
    <div class="slide-tracker">
    {
      pictureSourceArray.map((item,index) => (index === currentPic)?<div key={index} onClick={setCurrentPic.bind(null,index)} onClick={setCurrentPic.bind(null,index)} class="slide-dot current"/>:<div  onClick={setCurrentPic.bind(null,index)} class="slide-dot"></div>)
    }
    </div>
  )
}

export default ProfileSliderTracker