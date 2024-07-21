import "./About.css";
import { motion } from "framer-motion";
import { RiSchoolLine } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";

const aboutCards = [
  {
    icon: <RiSchoolLine size={20} />,
    title: "Education",
    content: "Computer-Science Hawassa University",
    initial: { y: 70, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  },
  {
    icon: <MdOutlineSettings size={20} />,
    title: "Experience",
    content: "4+ Years countless projects",
    initial: { y: 70, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  },
  {
    icon: <FaPersonArrowUpFromLine size={20} />,
    title: "Personality",
    content: "Disciplined Hard-working",
    initial: { y: 70, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  },
];

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_content">
          <div className="about-cards">
            {aboutCards.map((card, index) => (
              <motion.article
                key={index}
                className="about"
                initial={card.initial}
                whileInView={card.whileInView}
                transition={{ type: "tween", duration: 0.5, delay: 0.1 }}
              >
                <div className="about-icon">{card.icon}</div>
                <h2>{card.title}</h2>
                <p>{card.content}</p>
              </motion.article>
            ))}
          </div>
          <motion.p
            className="about-me"
            initial={{ y: -70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
          >
            Hi! I'm <b>Abduselam Idris, </b>a full-stack web developer. I
            specialize in creating intuitive, responsive, and high-performing
            web applications. Whether it's front-end design or back-end
            development, I deliver exceptional results. Ready to transform your
            vision into a stunning web presence? Let's get started!
          </motion.p>
          <div className="talk">
            <motion.a
              href="#contacts"
              className="btn btn-primary"
              whileHover={{ scale: 1.1 }}
            >
              Let's Talk
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
