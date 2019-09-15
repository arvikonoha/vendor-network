import React from 'react'
import {Link} from 'react-router-dom'
import './services.css'

function Services(){
  return (
    <>
    <div className="service-card">
      <Link>Explore <i class="fas fa-arrow-right fa-1x"></i></Link>
    </div>
    <div className="service-card">
    <Link>Explore <i class="fas fa-arrow-right fa-1x"></i></Link>
    </div>
    <div className="service-card">
    <Link>Explore <i class="fas fa-arrow-right fa-1x"></i></Link>
    </div>
    <div className="service-card">
    <Link>Explore <i class="fas fa-arrow-right fa-1x"></i></Link>
    </div>
    </>
  )
}

export default Services