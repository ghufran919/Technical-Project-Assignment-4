import React from "react";
import "../../Page/Main.css";
import "../About/About.css";
import "../../Page/Media Queries.css";
import Desc_1 from "../../assets/desc1.png";

function About() {
  return (
    <>
  <section className="description-container">
        <div>
            <div>
                <h2>Tentang saya</h2>
                <p>Saya adalah mahasiswa Hubungan Internasional yang kebetulan suka dengan hal berbau teknologi. 
                  Mengikuti perubahan teknologi serta prospek masa depan. Saya memutuskan untuk belajar coding di AMMAN Bootcamp. And the rest is history.</p>
            </div>
          </div>
        <img src= {Desc_1} alt="desc"></img>
        </section>
    </>
  );
}

export default About;