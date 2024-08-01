import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>Get in Touch</p>
          <h2 className="heading">Contact Me</h2>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="mailto:priyagupta30302@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")}  alt="Email icon" />
            </a>
            <span className={styles.text1}>
              <a href="mailto:priyagupta30302@gmail.com">priyagupta30302@gmail.com</a>
            </span>
          </li>

          <li className={styles.link}>
            <a  href="https://www.linkedin.com/in/priya-gupta-81b271252/">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            </a>
            <span className={styles.text1}>
              <a  href="https://www.linkedin.com/in/priya-gupta-81b271252/">linkedin.com/Priya</a>
            </span>
          </li>

          <li className={styles.link}>
           <a href="https://github.com/PriyaGupta30302">
           <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
           </a>
            <span className={styles.text1}>
              <a href="https://github.com/PriyaGupta30302">github.com/Priya</a>

            </span>
          </li>
        </ul>
        <div className={styles.footerNav}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.footerText}>© 2024 Priya Gupta</p>
    </footer>
  );
};

export default Contact;
