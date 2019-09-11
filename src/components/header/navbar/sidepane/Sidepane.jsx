import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './sidepane.css'

function Sidepane(){
  let [isSidepane, toggleSidepane] = useState(false);
  function setSidepane() {
    return isSidepane ? "sidepane appear hide-mm" : "sidepane hide-mm";
  }
  function setCross(){
    return isSidepane ? "hamberger cross":"hamberger"
  }
  return <ul className={setSidepane()}>
  <li> <Link to="/">Home</Link> </li>
  <li> <Link to="/services">Services</Link> </li>
  <li> <Link to="/profile">About</Link> </li>
  <li> <Link to="/login"> Login/Register</Link></li>
  <li>
  <div
    className={setCross()}
    onClick={() => toggleSidepane(!isSidepane)}
  >
    <div className="slice"></div>
    <div className="slice"></div>
    <div className="slice"></div>
  </div>
</li>
</ul>

}

export default Sidepane