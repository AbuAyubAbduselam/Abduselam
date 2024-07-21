import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <Link
        activeClass="nav-active"
        to="/"
        spy={true}
        smooth={true}
        offset={-100}
        duration={0}
      >
        <AiOutlineHome />
      </Link>
      <Link
        activeClass="nav-active"
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={0}
      >
        <FaUser />
      </Link>
      <Link
        activeClass="nav-active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-100}
        duration={0}
      >
        <GiSkills />
      </Link>
      <Link
        activeClass="nav-active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={0}
      >
        <GrProjects />
      </Link>
      <Link
        activeClass="nav-active"
        to="contacts"
        spy={true}
        smooth={true}
        offset={-100}
        duration={0}
      >
        <FaMessage />
      </Link>
    </nav>
  );
};
export default Nav;
