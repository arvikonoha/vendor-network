import React,{useState} from 'react'
import ProfileSliderTracker from './profile-slider-tracker/ProfileSliderTracker'

function ProfileSlider(){
  let pictureSourceArray=['./images/caterQuery1.jpg','./images/lightQuery1.jpg','./images/musicalQuery1.jpg','./images/photoQuery1.jpg']
  let [currentPic,setPic] = useState(0);
  function nextPic(){
    setPic((currentPic+1)%pictureSourceArray.length)
  }
  function prevPic(){
    setPic(currentPic === 0?pictureSourceArray.length-1:currentPic-1)
  }
  function setCurrentPic(index){
    setPic(index)
  }

  return(
    <div class="profile-image">
    {
      pictureSourceArray.map((item,index) => <img key={index} src={item} className={index===currentPic?"curr":"ncurr"} alt=""/>)
    }
    <div class="left-icon" onClick={prevPic}>
      <img src="./images/arrow.svg" width="35px"/>
    </div>
    <div class="right-icon" onClick={nextPic}>
      <img src="./images/arrow.svg" width="35px"/>
    </div>
    <ProfileSliderTracker pictureSourceArray={pictureSourceArray} setCurrentPic={setCurrentPic} currentPic={currentPic} />
  </div>
  )
}

export default ProfileSlider