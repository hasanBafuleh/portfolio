import { useState } from "react";
import "./main.css";

const myProjects = [
  { projectTitle: "Promptopia", category: "react&next", imgPath: "a" },
  { projectTitle: "Movies Harbor", category: "React", imgPath: "b" },
];
function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setcurrentActive("React");
          }}
          className={currentActive === "React" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            setcurrentActive("react&next");
          }}
          className={currentActive === "react&next" ? "active" : null}
        >
          React & Next.js
        </button>
        <button
          onClick={() => {
            setcurrentActive("Angular");
          }}
          className={currentActive === "Angular" ? "active" : null}
        >
          Angular
        </button>
        <button
          onClick={() => {
            setcurrentActive("Angular&.NET");
          }}
          className={currentActive === "Angular&.NET" ? "active" : null}
        >
          Angular & .NET
        </button>
      </section>

      <section className="flex right-section">
        {myProjects.map((item) => {
          return (
            <article key={item.imgPath} className="card">
              <img
                width={270}
                style={{ padding: "0.2rem" }}
                src={item.imgPath}
                alt=""
              />
              <div style={{ width: "270px" }} className=" box">
                <h1 className="title">{item.projectTitle}</h1>
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
