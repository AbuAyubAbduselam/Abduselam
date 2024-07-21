import "./Topbar.css";
import { Link } from "react-scroll";
import DarkMode from "../../util/DarkMode/DarkMode";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Topbar = () => {
  const [isTopBarVisible, setTopBarVisibility] = useState(true);

  const toggleTopBar = () => {
    setTopBarVisibility(!isTopBarVisible);
  };

  return (
    <>
      {isTopBarVisible && (
        <div className="container topbar-container">
          <div
            className="top-container"
            style={{
              opacity: 1,
              transition: "opacity 0.5s ease",
            }}
          >
            <Link
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={-100}
              duration={0}
            >
              <h4 className="top-btn">Home</h4>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={0}
            >
              <h4 className="top-btn">About</h4>
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={0}
            >
              <h4 className="top-btn">Skills</h4>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={0}
            >
              <h4 className="top-btn">Projects</h4>
            </Link>
            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-100}
              duration={0}
            >
              <h4 className="top-btn">Contacts</h4>
            </Link>
          </div>
        </div>
      )}
      <div className="top-con">
        <div className="portfo">Portfolio.</div>
        <div className="brightness">
          <DarkMode />
        </div>
      </div>
      <div
        className="corner-icon2"
        onClick={toggleTopBar}
        style={{ top: isTopBarVisible ? "4rem" : "1rem" }}
      >
        {isTopBarVisible ? (
          <IoIosArrowUp className="text-light up-down-arrow" />
        ) : (
          <IoIosArrowDown className="text-light up-down-arrow" />
        )}
      </div>
    </>
  );
};

export default Topbar;
