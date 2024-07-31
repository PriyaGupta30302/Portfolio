import React from "react";
import styles from "./Experience.module.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt } from "react-icons/fa";
import { SiBootstrap, SiTailwindcss, SiPhp, SiMysql } from "react-icons/si";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
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
            <div className={styles.educationItem}>
              <h4>Bachelor of Computer Application</h4>
              <p>Seth Jai Parkash Mukand Lal Institute of Engineering & Technology</p>
              <p>20 Sep, 2021 - 29 June, 2024</p>
            </div>
            <div className={styles.educationItem}>
              <h4>12th Grade</h4>
              <p>Swami Vivekanand Public School</p>
              <p>CBSE Board</p>
              <p>4 April, 2020 - 31 March, 2021</p>
            </div>
            <div className={styles.educationItem}>
              <h4>10th Grade</h4>
              <p>Swami Vivekanand Public School</p>
              <p>CBSE Board</p>
              <p>4 April, 2018 - 31 March, 2019</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
