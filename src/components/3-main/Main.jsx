import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";


function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setarr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const cArr = item.category.filter((myItem) => {
        return myItem === buttonCategory;
      });
      return cArr[0] === buttonCategory;
    });
    setarr(newArr);
  };

  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setarr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("React");
          }}
          className={currentActive === "React" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            handleClick("react&next");
          }}
          className={currentActive === "react&next" ? "active" : null}
        >
          React & Next.js
        </button>
        <button
          onClick={() => {
            handleClick("Angular");
          }}
          className={currentActive === "Angular" ? "active" : null}
        >
          Angular
        </button>
        <button
          onClick={() => {
            handleClick("Angular&.NET");
          }}
          className={currentActive === "Angular&.NET" ? "active" : null}
        >
          Angular & .NET
        </button>
      </section>

      <section className="flex right-section">
        {arr.map((item) => {
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
