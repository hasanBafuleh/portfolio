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

      <section className="border right-section">rrrrrrrrr</section>
    </main>
  );
}

export default Main;
