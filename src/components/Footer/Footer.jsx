import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; {currentYear} Abduselam. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
