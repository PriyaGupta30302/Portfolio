import React from 'react';
import styles from "./ProjectCard.module.css";
import amazon from "../../assets/projects/amazon.png";
import snake from "../../assets/projects/snake.png";
import virtual from "../../assets/projects/virtual.png";

const projectImages = {
  "projects/amazon.png": amazon,
  "projects/snake.png": snake,
  "projects/virtual.png": virtual,
};

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo } }) => {
  return (
    <div className={styles.container} id="projects">
      <img 
        src={projectImages[imageSrc]} 
        alt={`Image of ${title}`} 
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
