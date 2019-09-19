import React from 'react'
import DJServices from './dj-services/DJServices'
import CoreographerServices from './coreographer-services/CoreagrapherServices'
import BandServices from './band-services/BandServices'
import './musical-services.css'

function MusicalServices({sub_category}){
  function ResolveMusicServices(service_jsx){
    return (
      <ul>
        <h3>{sub_category} Services</h3>
        {service_jsx}
      </ul>
    )
  }
  switch (sub_category){
    case 'DJ': return ResolveMusicServices(<DJServices/>)
    case 'Coreographers': return ResolveMusicServices(<CoreographerServices/>)
    case 'Band': return ResolveMusicServices(<BandServices/>)
  }
  
}

export default MusicalServices