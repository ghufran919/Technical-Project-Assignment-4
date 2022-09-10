import "../Home/Home.css";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Photo from "../../assets/pp.png";

function Home() {
  return (
    <>
    <Navbar />
      <br />
    <section classname="hero-container">
        <div>
            <div>
                <h1>Partner kamu yang terpercaya
                </h1>
                <p>Buat apa belajar web kalau bisa saya buatin?</p>
            </div>
        </div>
        <img src={ Photo } alt="hero"></img>
    </section>
    </>
  );
}

export default Home;