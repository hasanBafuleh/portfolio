import "./footer.css";

function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#avatar">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        {/* <li><a href="">Speaking</a></li> */}
        {/* <li><a href="">Uses</a></li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* rights reserved*/}
      <p>© 2023 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
