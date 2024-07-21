import "./Projects.css";
import data from "./data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container portfolio-content">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 25 }}
              transition={{ delay: id * 0.3 }}
              key={id}
              id={id}
              className="portfolio_item"
            >
              <div className="portfolio_item_image ">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
