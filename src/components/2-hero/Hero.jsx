import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section border">
        <div className="main-avatar flex">
          <img src="./personalPic.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">Software Engineer, Full Stack</h1>
        <p className="sub-title">I'm Hasan Bafuleh</p>

        <div className="icons flex">
          <div className="icon-twitter"></div>
          <div className="icon-linkedin"></div>
          <div className="icon-github"></div>
        </div>
      </div>

      <div className="right-section animation border">animation</div>
    </section>
  );
}

export default Hero;
