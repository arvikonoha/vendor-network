import React from 'react'
import PhotoServices from './PhotoServices'
import CaterServices from './cater-services/CaterServices'
import MusicalServices from './musical-services/MusicalServices'
import DecoratorServices from './decorator-services/DecoratorServices'

function ResolveServices({serviceText}){
  switch (serviceText){
    case 'photographer':  return <PhotoServices/>
    case 'caterer':  return <CaterServices/>
    case 'musicals':  return <MusicalServices sub_category={"DJ"}/>
    case 'decorators': return <DecoratorServices/>
  }
}

export default ResolveServices