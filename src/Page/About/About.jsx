import React from "react";
import "../../Page/Main.css";
import "../About/About.css";

function About() {
  return (
    <>
  <section class="description-container">
        <div>
            <div>
                <h2> tentang saya</h2>
                <p>Saya adalah mahasiswa Hubungan Internasional yang kebetulan suka dengan hal berbau teknologi. 
                  Mengikuti perubahan teknologi serta prospek masa depan. Saya memutuskan untuk belajar coding di AMMAN Bootcamp. And the rest is history.</p>
            </div>
            <div class="description-left-footer">
                <p>May 20th 2020</p>
                <p class="font-weight-bold">Read more</p>
            </div>
        </div>
        <img src="assets/desc.png" alt="desc"></img>
        </section>
    </>
  );
}

export default About;