import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
function Navbar() {
  return (
    <>
<nav classname="navbar">
        <h1> Ahmad Ghufran Akbar</h1>
        <div classname="nav-menu">
            <Link to="/">Home</Link>
            <Link to="">Article</Link>
            <Link to="">Portfolio</Link>
            <Link to="">About</Link>
<Link to="http://www.instagram.com/ghufran919"><img src="assets/instagram.svg" alt="instagram"></img>
</Link> 
        </div>
    </nav>

    </>
  );
}

export default Navbar;