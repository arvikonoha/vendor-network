import React from 'react'
import './gallery.css'

function Gallery(){
  return (
    <div class="gallery">
          <div class="gallery-item">
            <img style={{width:"100%"}} src="./images/caterQuery1.jpg" alt="" />          
            <img style={{width:"100%"}} src="./images/card6.jpg" alt="" />          
            <img style={{width:"100%"}} src="./images/card7.jpg" alt="" />          
          </div>
          <div class="gallery-item">
            <img style={{width:"100%"}} src="./images/card11.jpg" alt="" />          
            <img style={{width:"100%"}} src="./images/card13.jpg" alt="" />          
            <img style={{width:"100%"}} src="./images/card2.jpg" alt="" />          
          </div>
          <div class="gallery-item">
            <img style={{width:"100%"}} src="./images/card3.jpg" alt="" />          
            <img style={{width:"100%"}} src="./images/card10.jpg" alt="" />          
            <img style={{width:"100%"}} src="./images/card1.jpg" alt="" />          
          </div>
          
        </div>
  )
}

export default Gallery