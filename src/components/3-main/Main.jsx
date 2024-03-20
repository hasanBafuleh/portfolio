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

      <section className="border right-section">
        <article className="card">
          <img src="" alt="" />
          <div className="box">
            <h1 className="title"></h1>
            <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil officiis minus repudiandae eius maxime laborum, ex tempora similique nam nobis veniam pariatur</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Main;
