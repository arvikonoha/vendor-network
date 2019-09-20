import React from 'react'
import './bandservices.css'

function BandServices(){
  return <li className="band-services">
      <label htmlFor="instrument">Select the instruments required</label>
        <fieldset id="instrument">
          <label htmlFor="trumphet">
            Trumphet
            <input type="checkbox" id="trumphet" value="trumphet" name="instrument"/>
          </label>
          <label htmlFor="drum">
            Drum
            <input type="checkbox" id="drum" value="drum" name="instrument"/>
          </label>
          <label htmlFor="violin">
            Trumphet
            <input type="checkbox" id="violin" value="violin" name="instrument"/>
          </label>
        </fieldset>
      <label htmlFor="team-size">Enter the number of band members reqired</label>
      <input type="number" name="team-size" id="team-size"/>
      <br/>
      <button>Submit</button>
  </li>
}

export default BandServices