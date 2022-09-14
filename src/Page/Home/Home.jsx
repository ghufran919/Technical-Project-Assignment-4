import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Photo from "../../assets/profile-picture.png";
import About from "../../Page/About/About";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Portfolio from "../../Page/Portfolio/Portfolio";
import Article from "../../Page/Article/Article";
import "../Home/Home.css";
import "../../Page/Main.css";
import "../../Page/Media Queries.css";


function Home() {
  return (
    <>
    <Navbar />
  <body>
    <section className="hero-container">
        <div>
          <div>
          <h1 className="title">Partner kamu yang terpercaya</h1>
          <p>Buat apa belajar web kalau bisa saya buatin?</p>
                < Button />
            </div>
        </div>
        <img src={ Photo } alt="hero"></img>
    </section>
    
    <a name="about"> < About /> </a>
    <a name="portfolio"> < Portfolio /> </a>
    <a name="article"> < Article /> </a>
    </body>
    < Footer />
    </>
  );
}

export default Home;