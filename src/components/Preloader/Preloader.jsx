import { motion } from "framer-motion";

const preloaderVariants = {
  hidden: { y: 0 },
  visible: {
    y: "-100vh",
    transition: {
      type: "spring",
      delay: 2.5,
      duration: 1,
      staggerChildren: 0.4,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" },
  },
};

const circle1Variants = {
  hidden: { width: 0, height: 0 },
  visible: {
    width: 1200,
    height: 1200,
    transition: { type: "spring" },
  },
};

const circle2Variants = {
  hidden: { width: 0, height: 0 },
  visible: {
    width: 300,
    height: 300,
    transition: { type: "spring" },
  },
};

const circle3Variants = {
  hidden: { width: 0, height: 0 },
  visible: {
    width: 400,
    height: 400,
    transition: { type: "spring" },
  },
};

const PreLoader = () => {
  return (
    <motion.div
      variants={preloaderVariants}
      initial="hidden"
      animate="visible"
      className="preloader"
    >
      <motion.div variants={circle1Variants} className="circle1"></motion.div>
      <motion.div variants={circle2Variants} className="circle2"></motion.div>
      <motion.div variants={circle3Variants} className="circle3"></motion.div>
      <motion.p variants={titleVariants} className="title">
        Full stack
      </motion.p>
      <motion.p variants={titleVariants} className="title">
        Web
      </motion.p>
      <motion.p variants={titleVariants} className="title">
        Developer
      </motion.p>
    </motion.div>
  );
};

export default PreLoader;
