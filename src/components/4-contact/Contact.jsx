import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/Done.json";
import contactMeAnimation from "../../animation/contactMe.json";

function Contact() {
  const [state, handleSubmit] = useForm("mvoewqdn");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-title">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere laborum
        nulla corporis veritatis temporibus accusantium
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex" style={{ marginBottom: "24px" }}>
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email"></input>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex">
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 38 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
          className="contact-animation"
          style={{ height: 350 }} 
          animationData={contactMeAnimation} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
