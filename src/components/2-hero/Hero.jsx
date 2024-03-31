import "./hero.css";
import Lottie from "lottie-react";
import softwareEnAnimation from "../..//animation/softwareEngineer.json";
import { motion } from "framer-motion";

function Hero() {
  const titleText = "Software Engineer, Full Stack";
  const subText =
    "I'm Hasan Bafuleh, a results-driven Software Engineer with an Associate Degree in Computer Science. My journey in software development has equipped me with a strong foundation in coding and efficient algorithms, making me well-prepared for new challenges in the tech industry. Eager to contribute to innovative projects, I actively engage in developing full-stack web applications using HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and Next.js. Furthermore, I possess experience in creating applications with Flutter..";

  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="main-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 10, type: "spring", stiffness: 100 }}
            src="./graduationPic.png"
            className="avatar"
            id="avatar"
            alt="Personal picture"
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          {titleText.split(" ").map((el, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: i / 7 }}
            >
              {el}{" "}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="sub-title"
        >
          {subText.split(" ").map((el, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: i / 14 }}
            >
              {el}{" "}
            </motion.span>
          ))}
        </motion.p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <a
            href="https://www.linkedin.com/in/hasan-bafuleh/"
            target="_blank"
            rel="noopener noreferrer"
            className="all-icons"
          >
            <div className="icon icon-linkedin"></div>
          </a>
          <a
          href="https://github.com/hasanBafuleh"
          target="_blank"
          rel="noopener noreferrer"
          className="all-icons"
          >
            <div className="icon icon-github"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie animationData={softwareEnAnimation} />
      </div>
    </section>
  );
}

export default Hero;
