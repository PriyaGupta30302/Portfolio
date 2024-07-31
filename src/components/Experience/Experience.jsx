import React from "react";
import styles from "./Experience.module.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt } from "react-icons/fa";
import { SiBootstrap, SiTailwindcss, SiPhp, SiMysql } from "react-icons/si";
import history from "../../data/education.json"; // Ensure this path and file are correct
import { getImageUrl } from "../../utils"; // Ensure this path and function are correct

export const Experience = () => {
  return (
    <section className={styles.container} id="experience" >
      <h2 className={styles.title}>Skills & Education</h2>
      <div className={styles.content}>
        
        {/* Skills Section */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Skills</h3>
          <div className={styles.skills}>
            <div className={styles.skillCategory}>
              <h4>Frontend</h4>
              <div className={styles.skillList}>
                <div className={styles.skill}>
                  <FaHtml5 size={40} className={styles.skillIcon} color="#E34F26" />
                  <p>HTML</p>
                </div>
                <div className={styles.skill}>
                  <FaCss3Alt size={40} className={styles.skillIcon} color="#1572B6" />
                  <p>CSS</p>
                </div>
                <div className={styles.skill}>
                  <FaJsSquare size={40} className={styles.skillIcon} color="#F7DF1E" />
                  <p>JavaScript</p>
                </div>
                <div className={styles.skill}>
                  <FaReact size={40} className={styles.skillIcon} color="#61DAFB" />
                  <p>React.js</p>
                </div>
                <div className={styles.skill}>
                  <SiBootstrap size={40} className={styles.skillIcon} color="#7952B3" />
                  <p>Bootstrap</p>
                </div>
                <div className={styles.skill}>
                  <SiTailwindcss size={40} className={styles.skillIcon} color="#06B6D4" />
                  <p>Tailwind</p>
                </div>
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h4>Version Control</h4>
              <div className={styles.skillList}>
                <div className={styles.skill}>
                  <FaGitAlt size={40} className={styles.skillIcon} color="#F05032" />
                  <p>Git/GitHub</p>
                </div>
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h4>Additional</h4>
              <div className={styles.skillList}>
                <div className={styles.skill}>
                  <SiPhp size={40} className={styles.skillIcon} color="#777BB4" />
                  <p>PHP</p>
                </div>
                <div className={styles.skill}>
                  <SiMysql size={40} className={styles.skillIcon} color="#4479A1" />
                  <p>SQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Education</h3>
          <div className={styles.education}>
            {history.map((educationItem, index) => (
              <div key={index} className={styles.educationItem}>
                <div className={styles.educationImageContainer}>
                  <img
                    src={getImageUrl(educationItem.imageSrc)}
                    alt={`${educationItem.title} Logo`}
                    className={styles.educationImage}
                  />
                </div>
                <div className={styles.educationDetails}>
                  <h4>{educationItem.title}</h4>
                  <p>{educationItem.institution}</p>
                  {educationItem.board && <p>{educationItem.board}</p>}
                  <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
