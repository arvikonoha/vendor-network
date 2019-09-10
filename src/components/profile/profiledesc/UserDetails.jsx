import React from 'react'
import './userdetails.css'

function UserDetails(){
  return (
    <div class="user-details">
          <div class="fake-box">
            <h2>Enter your details to place order</h2>
          </div>
          <form action="">
            <input type="text" placeholder="Enter your Fullname" name="user-name"/>
            <br/>
            <input type="tel" placeholder="Enter your Telephone number" name="user-phone"/>
            <br/>
            <input type="text" placeholder="Enter your Address" name="user-address"/>
            <br/>
            <input type="text" placeholder="Enter your Pin" name="user-pin"/>
            <br/>
            <button>Services Selected</button>
            <button type="submit">Submit</button>
          </form>
        </div>
  )
}

export default UserDetails