import React from 'react'
import './coreographer-services.css'

function CoreographerServices(){
  return <li className="coreographer-services" >
    <label htmlFor="team-size">Enter the number of people involved</label>
    <input type="number"/>
    <input type="text" placeholder="Enter the language"/>
    <textarea name="extra-comment" id="" placeholder="Any additional service required"></textarea>
    <button>Submit</button>
  </li>
}

export default CoreographerServices