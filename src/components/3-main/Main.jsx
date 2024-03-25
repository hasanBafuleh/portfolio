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

      <section className="flex right-section">
        {["aa", "bb", "cc", 2, 3].map((item) => {
          return (
            <article key={item} className="card">
              <img
                width={270}
                style={{ padding: "0.2rem" }}
                src="./Promptopia.png"
                alt=""
              />
              <div style={{ width: "270px" }} className=" box">
                <h1 className="title">Propmtopia</h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero nihil officiis minus repudiandae eius maxime laborum,
                  ex tempora similique nam nobis veniam pariatur
                </p>
                <div className="flex icons">
                  <div style={{ gap: "0.5rem" }} className="flex source">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Main;
