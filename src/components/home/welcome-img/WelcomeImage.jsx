import React,{useState} from 'react'
import './welcome-image.css'

function WelcomeImage(){
  let [currentPic,setPic] = useState(0);
  function nextPic(){
    setPic((currentPic+1)%4)
  }
  function prevPic(){
    setPic(currentPic === 0?3:currentPic-1)
  }
  return (
    <div className="welcome-image">
      {
        [0,1,2,3].map(item => item === currentPic ? <div className="image-box current"/>:<div className="image-box"/>)
      }
      <div className="right-button" onClick={nextPic}><i class="fas fa-arrow-right"></i></div>
      <div className="left-button" onClick={prevPic}><i class="fas fa-arrow-left"></i></div>
      <div className="slider">
        {[0,1,2,3].map(item => item === currentPic?<div key={item} onClick={()=>setPic(item)} className="slide current"/>:<div key={item} onClick={()=>setPic(item)} className="slide"/>)}
      </div>
    </div>
  )
}

export default WelcomeImage