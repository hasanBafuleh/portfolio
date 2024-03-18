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

        <h1 className="title">
          Software Engineer, <br /> Full Stack
        </h1>
        <p className="sub-title">
          I'm Hasan Bafuleh Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Exercitationem ipsum mollitia quaerat minus aspernatur aliquid.
          Dignissimos distinctio quasi a praesentium harum assumenda.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-linkedin"></div>
          <div className="icon icon-github"></div>
        </div>
      </div>

      <div className="right-section animation border">animation</div>
    </section>
  );
}

export default Hero;
