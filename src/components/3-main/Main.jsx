import React from "react";
import "./main.css";

function Main() {
  return (
    <main className="flex">
      <section className="flex left-section">
        <button className="active">All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & Next</button>
        <button>Node & Express</button>
      </section>

      <section className="right-section">

        <article className="border card">
          <img src="" alt="" />
          <div className="box">
            <h1 className="title"></h1>
            <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil officiis minus repudiandae eius maxime laborum, ex tempora similique nam nobis veniam pariatur</p>
            <div className="flex">
              <div className="icon-link"></div>
              <div className="icon-github"></div>
              <a href="">
                more
                <span className="icon-arrow-right"></span>
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Main;
