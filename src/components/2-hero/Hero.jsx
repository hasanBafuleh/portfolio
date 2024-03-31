import "./hero.css";
import Lottie from "lottie-react";
import softwareEnAnimation from "../..//animation/softwareEngineer.json";
import { motion } from "framer-motion";

function Hero() {
  const titleText = "Software Engineer, Full Stack";
  const subText =
    "I'm Hasan Bafuleh Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum mollitia quaerat minus aspernatur aliquid. Dignissimos distinctio quasi a praesentium harum assumenda.";

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
            alt=""
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
          <div className="icon icon-linkedin"></div>
          <div className="icon icon-github"></div>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie animationData={softwareEnAnimation} />
      </div>
    </section>
  );
}

export default Hero;
