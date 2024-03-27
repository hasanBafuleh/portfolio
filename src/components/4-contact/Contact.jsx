import "./contact.css";

function Contact() {
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

      <div className="flex">
        <form className="">
          <div className="flex" style={{ marginBottom: "24px" }}>
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="" id="email"></input>
          </div>
          <div className="flex">
            <label htmlFor="message">Your message:</label>
            <textarea required name="" id="message"></textarea>
          </div>
            <button className="submit">Submit</button>
        </form>
        <div className="animation border">Animation</div>
      </div>
    </section>
  );
}

export default Contact;
