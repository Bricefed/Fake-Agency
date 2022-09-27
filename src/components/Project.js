import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";

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

  return (
    <div className="project-main">
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
    </div>
  );
};

export default Project;
