import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer_logo">
        Abduselam
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contacts">Contact</a>{" "}
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
        <a href="https://x.com/Abdu36899370662">
          <FaTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy Abduselam; All rights are reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
