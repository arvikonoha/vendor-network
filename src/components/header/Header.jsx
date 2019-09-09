import React from "react";
import MainLogo from "./MainLogo";
import Navbar from "./Navbar";
import "./style.css";

const Header = () => (
  <header id="main-header">
    <div class="container">
      <MainLogo />
      <Navbar />
    </div>
  </header>
);

export default Header;
