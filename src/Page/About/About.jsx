import React from "react";
import "../../Page/Main.css";
import "../About/About.css";

function About() {
  return (
    <>
  <section className="description-container">
        <div>
            <div>
                <h2> tentang saya</h2>
                <p>Saya adalah mahasiswa Hubungan Internasional yang kebetulan suka dengan hal berbau teknologi. 
                  Mengikuti perubahan teknologi serta prospek masa depan. Saya memutuskan untuk belajar coding di AMMAN Bootcamp. And the rest is history.</p>
            </div>
            <div className="description-left-footer">
                <p className="font-weight-bold">Ahmad Ghufran Akbar</p>
            </div>
        </div>
        <img src="assets/desc.png" alt="desc"></img>
        </section>
    </>
  );
}

export default About;