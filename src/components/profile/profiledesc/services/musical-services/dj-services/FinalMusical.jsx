import React from 'react'

function FinalMusical({service,setNext}){
  return (
    <li className="djservices">
      <h4>{service} event Selected</h4>
      <label htmlFor="user-population">Enter the possible number of people</label>
      <br/>
      <input type="number" min="0" name="user-population" id="user-population"/>
      <i className="fas fa-arrow-left" onClick={() => setNext(false)} ></i>
      <br/>
      <button>Submit</button>
    </li>
  )
}

export default FinalMusical