import "./Skills.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import express from "../../assets/express.png";
import firebase from "../../assets/firebase.png";
import git from "../../assets/git.png";
import java from "../../assets/java.png";
import js from "../../assets/Js.png";
import mongodb from "../../assets/mongodb.png";
import mongoose from "../../assets/mongoose.png";
import node from "../../assets/node.png";
import php from "../../assets/php.png";
import react from "../../assets/react.png";
import rest from "../../assets/rest.png";
import sql from "../../assets/sql.png";
import tailwind from "../../assets/tailwind.png";
import { motion } from "framer-motion";

const skills = [
  { name: "Html", img: html },
  { name: "Css", img: css },
  { name: "Javascript", img: js },
  { name: "React", img: react },
  { name: "Tailwind", img: tailwind },
  { name: "Node", img: node },
  { name: "Express", img: express },
  { name: "MongoDB", img: mongodb },
  { name: "Mongoose", img: mongoose },
  { name: "Java", img: java },
  { name: "Php", img: php },
  { name: "Firebase", img: firebase },
  { name: "Git", img: git },
  { name: "Rest API", img: rest },
  { name: "My SQL", img: sql },
];

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience-container">
        <div className="lang-container">
          {skills.map((skill, index) => (
            <motion.div
              className="all-lang"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 25 }}
              transition={{ delay: index * 0.07 }}
              key={index}
            >
              <article className="lang">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="skill_item_image"
                />
              </article>
              <h2 className="lang-name">{skill.name}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
