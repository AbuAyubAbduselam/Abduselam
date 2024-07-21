import { motion } from "framer-motion";
import Abduselam from "../../assets/Abduselam.pdf";

const buttonVariant = {
  hover: {
    scale: 1.1,

    transition: {
      duration: 0.3,
      yoyo: 5,
    },
  },
};

const CTA = () => {
  return (
    <div className="cta">
      <motion.a
        href={Abduselam}
        className="btn"
        variants={buttonVariant}
        whileHover="hover"
        download="Abduselam.pdf"
      >
        Download CV
      </motion.a>
      <motion.a
        href="#contacts"
        className="btn btn-primary"
        whileHover={{ scale: 1.1 }}
      >
        Let's Talk
      </motion.a>
    </div>
  );
};

export default CTA;
