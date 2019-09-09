import React, { useState } from "react";
import Sidepane from "./Sidepane"

function Navbar() {
  
  return (
    <nav id="main-nav" className="pd-10">
      <ul>
        <li className="pd-15-0 hide-sm">
          <div className="bcm-anim  some-anime"></div>
          <a href="" className="pd-15">
            Home
          </a>
        </li>
        <li className="pd-15-0 hide-sm">
          <div className="bcm-anim  some-anime"></div>
          <a href="" className="pd-15">
            Services
          </a>
        </li>
        <li className="pd-15-0 hide-sm">
          <div className="bcm-anim  some-anime"></div>
          <a href="" className="pd-15">
            About
          </a>
        </li>
        <li className="pd-15-0 hide-sm">
          <div className="bcm-anim  some-anime"></div>
          <a href="" className="pd-15">
            Login/Register
          </a>
        </li>
        <Sidepane/>
      </ul>
    </nav>
  );
}
export default Navbar;
