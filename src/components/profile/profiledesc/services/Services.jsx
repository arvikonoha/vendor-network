import React from 'react'
import './services.css'

function Services(){
  return(
    <div class="profile-services">
      <ul>
        <li>Photography 
          <br/>
          <div class="price">  &#8377;20000 - &#8377;30000 </div>
        <button class="add-service"><i class="fas fa-shopping-cart"></i></button>
        </li>
        <li>Photography + Video 
          <br/> 
          <div class="price"> &#8377;30000  - &#8377;40000 </div>
          <button class="add-service"><i class="fas fa-shopping-cart"></i></button>
        </li>
        <li>Photography + Video (Drone) 
          <br/> 
          <div class="price"> &#8377;60000  - &#8377;70000 </div>
          <button class="add-service"><i class="fas fa-shopping-cart"></i></button>
        </li>
      </ul>
    </div>
  )
}

export default Services