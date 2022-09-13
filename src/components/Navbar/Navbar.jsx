import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">Home</Link>
          <Link to="/Article">Article</Link>
          <Link to="/Portfolio">Portfolio</Link>
          <Link to="/About">About</Link>
          <a href="http://www.instagram.com/ghufran919"><img src= { Icon } alt="instagram"></img>
          </a>
        </div>
      </nav>
    </body>
        
    </>
  );
}

export default Navbar;