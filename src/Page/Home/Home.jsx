import "../Home/Home.css";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Photo from "../../assets/pp.png";
import "../Home/Home.css";

function Home() {
  return (
    <>
    <Navbar />
      <br />
  <body>
    <section class="hero-container">
        <div>
            <div>
                <h1>Partner kamu yang terpercaya
                </h1>
                <p>Buat apa belajar web kalau bisa saya buatin?</p>
            </div>
        </div>
        <img src={ Photo } alt="hero"></img>
    </section>
    </body>
    </>
  );
}

export default Home;