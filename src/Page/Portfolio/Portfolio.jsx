
import React from "react";
import "../../Page/Main.css";
import "../Portfolio/Portfolio.css";
import Card_1 from "../../assets/card1.png";
import Card_2 from "../../assets/card2.png";
import Card_3 from "../../assets/card3.png";

function Portfolio() {
  return (
    <>
<section class="content-container">
        <div class="card">
            <img src= {Card_1 } alt="card1"></img>
            <div class="card-body">
                <h3>Project 1</h3>
                <p>Personal Website (HTML,CSS)</p>
            </div>
            <div class="card-footer">
                <a href="https://ahmadghufranakbar.netlify.app/" target="_blank" class="font-weight-bold">Demo</a>
            </div>
        </div>
        <div class="card">
            <img src= { Card_2 } alt="card2"></img>
            <div class="card-body">
                <h3>Project 2</h3>
                <p>Kalkulator Indeks Massa Tubuh</p>
            </div>
            <div class="card-footer">    
            <a href="https://indeksmassatubuh.netlify.app/" target="_blank" class="font-weight-bold">Demo</a>
            </div>
        </div>
        <div class="card">
            <img src= { Card_3 } alt="card3"></img>
            <div class="card-body">
                <h3>Project 3</h3>
                <p>Movie App dengan TMDB API</p>
            </div>
            <div class="card-footer">
                <a href="https://skilmovie-ghufran919.netlify.app/" target="_blank" class="font-weight-bold">Demo</a>
            </div>
        </div>
    </section>

    </>
  );
}

export default Portfolio;