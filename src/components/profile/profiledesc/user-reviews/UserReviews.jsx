import React from 'react'
import './userreview.css'

function UserReview(){

  return <div class="user-reviews">
          <ul>
            <li class="review-item pd-30">
              <h3>User name</h3>
              <p>Location</p>
              <div class="rating">
              <div class="star"> <img src="./images/star.svg" width="9px" alt="" /> </div>
              <div class="star"> <img src="./images/star.svg" width="9px" alt="" /> </div>
              <div class="star"> <img src="./images/star.svg" width="9px" alt="" /> </div>
              <div class="star"> <img src="./images/star.svg" width="9px" alt="" /> </div>
              <div class="star"> <img src="./images/star.svg" width="9px" alt="" /> </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur, illo quaerat accusamus deleniti officia nulla at minima explicabo natus.</p>
            </li>
            <li class="review-item pd-30">
              <h3>User name</h3>
              <p>Location</p>
              <div class="rating">
              <div class="star"> <img src="./images/star.svg" width="9px" alt="" /> </div>
              <div class="star"> <img src="./images/star.svg" width="9px" alt="" /> </div>
              <div class="star"> <img src="./images/star.svg" width="9px" alt="" /> </div>
              <div class="star"> <img src="./images/star.svg" width="9px" alt="" /> </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur, illo quaerat accusamus deleniti officia nulla at minima explicabo natus.</p>
            </li>
            <li class="review-item pd-30">
              <h3>User name</h3>
              <p>Location</p>
              <div class="rating">
              <div class="star"> <img src="./images/star.svg" width="9px" alt="" /> </div>
              <div class="star"> <img src="./images/star.svg" width="9px" alt="" /> </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur, illo quaerat accusamus deleniti officia nulla at minima explicabo natus.</p>
            </li>
            
          </ul>
        </div>
}

export default UserReview