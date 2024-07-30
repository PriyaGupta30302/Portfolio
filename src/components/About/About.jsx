import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


export const About = () => {
    return (
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                I'm a frontend developer passionate about building responsive and visually appealing websites using HTML, CSS, JavaScript and React.js .
              </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Version Control</h3>
                <p>
                I use Git and GitHub for version control to manage code changes, collaborate with others, and keep a backup of my work. This helps ensure code quality and smooth project development.
              </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
              <div className={styles.aboutItemText}>
                <h3>CSS Framework</h3>
                <p>
                I am familiar with frameworks such as Bootstrap and Tailwind CSS, which help me create modern and responsive designs.
              </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
              <div className={styles.aboutItemText}>
                <h3>Additional</h3>
                <p>
                I have a solid understanding of PHP and SQL, enabling me to build dynamic, interactive, and functionally robust web applications that complement my frontend skills.
              </p>
              </div>
            </li>
            
          </ul>
        </div>
      </section>
    );
  };