import React from "react";
import MainLogo from "./mainlogo/MainLogo";
import Navbar from "./navbar/Navbar";

const Header = () => (
  <header id="main-header">
    <div class="container">
      <MainLogo />
      <Navbar />
    </div>
  </header>
);

export default Header;
