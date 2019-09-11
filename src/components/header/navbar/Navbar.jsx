import React from "react";
import {Link} from 'react-router-dom'
import Sidepane from "./sidepane/Sidepane"
import "./navbar.css"

function Navbar() {
  
  return (
    <nav id="main-nav" className="pd-10">
      <ul>
        <li className="pd-15-0 hide-sm">
          <div className="bcm-anim"></div>
          <Link to="/" className="pd-15">
            Home
          </Link>
        </li>
        <li className="pd-15-0 hide-sm">
          <div className="bcm-anim"></div>
          <Link to="/services" className="pd-15">
            Services
          </Link>
        </li>
        <li className="pd-15-0 hide-sm">
          <div className="bcm-anim"></div>
          <Link to="/profile" className="pd-15">
            About
          </Link>
        </li>
        <li className="pd-15-0 hide-sm">
          <div className="bcm-anim"></div>
          <Link to="login" className="pd-15">
            Login/Register
          </Link>
        </li>
        <Sidepane/>
      </ul>
    </nav>
  );
}
export default Navbar;
