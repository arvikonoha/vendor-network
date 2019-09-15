import React from 'react'
import WelcomeText from './welcome-text/WelcomeText'
import WelcomeImage from './welcome-img/WelcomeImage'
import Services from './services/Services'
import './home.css'

function Home(){
  return (
    <>
    <section className="welcome-container">
      <WelcomeText/>
      <WelcomeImage/>
    </section>
    <section id="service-selection">
      <h2>Services offered</h2>
      <div className="service-container">
        <Services/>
      </div>
    </section>
    <section id="service-sort">
      <h2>Sort by category</h2>
    </section>
    </>
  )
}

export default Home