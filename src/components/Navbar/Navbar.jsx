import React from "react";
import Icon from "../../assets/instagram.svg";
import "../../Page/Main.css";
import "../Navbar/Navbar.css"

function Navbar() {
  return (
    <>
<body>
      <nav class="navbar">
        <h1>Ahmad Ghufran Akbar</h1>
        <div class="nav-menu">
          <a href="/">Home</a>
          <a href="#article">Article</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="http://www.instagram.com/ghufran919"><img src= { Icon } alt="instagram"></img>
          </a>
        </div>
      </nav>
    </body>
        
    </>
  );
}

export default Navbar;