import Description from './description/Description'
import Gallery from './gallery/Gallery'
import Services from './services/Services'
import UserReviews from './user-reviews/UserReviews'
import React from 'react'

function TabHandler({tab}){
  switch(tab){
    case "Descrption": return <Description/>
    case "Services": return <Services/>
    case "Reviews": return <UserReviews/>
    case "Gallery": return <Gallery/>
    default: return null
  }
}

export default TabHandler