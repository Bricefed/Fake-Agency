import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Project = ({ projectNumber }) => {
  const [project] = useState(projectsData[projectNumber]);
  const [top, setTop] = useState();
  const [right, setRight] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    setSize("scale(" + Math.floor(Math.random() + 0.7));
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setRight(Math.floor(Math.random() * 200 + 100) + "px");
  }, []);

  const variants = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, transition: { delay: 0.5, duration: 0.5 }, x: 0 },
    exit: { opacity: 0, transition: { duration: 0.5 }, x: -200 },
  };

  return (
    <motion.div
      className="project-main"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="project-content">
        <h1>{project.title}</h1>
        <p>{project.date}</p>
        <ul className="languages">
          {project.languages.map((lang, k) => (
            <li key={k}>{lang}</li>
          ))}
        </ul>
      </div>
      <div className="img-content">
        <div className="img-container hover">
          <span>
            <h3>{project.title}</h3>
            <p>{project.infos}</p>
          </span>
          <img src={project.img} alt={project.title} />
        </div>
        <div className="button-container">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="hover"
          >
            <span className="button">Voir le site</span>
          </a>
        </div>
      </div>
      <span
        className="random-circle"
        style={{ top, right, transform: size }}
      ></span>
    </motion.div>
  );
};

export default Project;
