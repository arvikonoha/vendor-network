import React,{useState} from 'react'

function Sidepane(){
  let [isSidepane, toggleSidepane] = useState(false);
  function setSidepane() {
    return isSidepane ? "sidepane appear hide-mm" : "sidepane hide-mm";
  }
  function setCross(){
    return isSidepane ? "hamberger cross":"hamberger"
  }
  return <ul className={setSidepane()}>
  <li> <a href="">Home</a> </li>
  <li> <a href="">Services</a> </li>
  <li> <a href="">Help</a> </li>
  <li> <a href=""> Login/Register</a></li>
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