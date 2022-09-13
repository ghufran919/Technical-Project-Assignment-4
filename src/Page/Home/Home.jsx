import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Photo from "../../assets/profile-picture.png";
import About from "../../Page/About/About";
import Footer from "../../components/Footer/Footer";
import "../../Page/Main.css";
import "../Home/Home.css";

function Home() {
  return (
    <>
    <Navbar />
  <body>
    <section class="hero-container">
        <div>
            <div>
                <h1 class="title">Partner kamu yang terpercaya</h1>
                <p>Buat apa belajar web kalau bisa saya buatin?</p>
            </div>
        </div>
        <img src={ Photo } alt="hero"></img>
    </section>
    < About />
    </body>
    < Footer />
    </>
  );
}

export default Home;