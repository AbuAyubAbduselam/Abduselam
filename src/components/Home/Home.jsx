import "./Home.css";
import CTA from "./CTA";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

import image from "../../assets/coding.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <header id="/">
      <div className="container header_container">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5, delay: 4 }}
        >
          <h5>Hello, I'm</h5>
          <h1>Abduselam</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
        </motion.div>
        <motion.div
          initial={{ y: -750 }}
          animate={{ y: -10 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.1, delay: 4 }}
        >
          <img src={image} alt="" className="coding" />
        </motion.div>
      </div>
      <div className="two-arrows">
        <a href="#footer" className="scroll-up">
          <FaArrowDown className="scroll-icon" />
        </a>
        <a href="#" className="scroll-down">
          <FaArrowUp className="scroll-icon" />
        </a>
      </div>
    </header>
  );
};

export default Home;
