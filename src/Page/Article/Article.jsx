
import React from "react";
import "../../Page/Main.css";
import "../Article/Article.css";
import "../../Page/Media Queries.css";
import Desc_2 from "../../assets/desc2.png";

function Article() {
  return (
    <>
<section className="what-is-container">
        <div>
            <div>
                <h1>Penstudi.id</h1>
                <p>Mau cek web yang saya buat juga?</p>
                <p>Pake Wordpress juga sih tapi gapapa hehe</p>
            </div>
            <div className="footer">
                <a href="https://penstudi.id" target="_blank" className="font-weight-bold">Demo</a>
            </div>
        </div>
        <img src= {Desc_2} alt="what-is"></img>
    </section>
    

    </>
  );
}

export default Article;