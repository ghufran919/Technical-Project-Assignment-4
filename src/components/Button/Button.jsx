import React from "react";
import "../../Page/Main.css";
import "./Button.css";
import "../../Page/Media Queries.css";

function Button() {
  return (
    <>
  
  <section class="button-container">
        <button onClick= {(e) => {e.preventDefault();window.location.href='mailto:ahmadghufranakbar@gmail.com';}} 
        class="btn">Contact Me</button>
    </section>

</>
  );
}

export default Button;
