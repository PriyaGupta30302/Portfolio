import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text  }>
        <p>Get in Touch</p>
          <h2 className="heading" >Contact Me</h2>
          
        </div>
        <ul className={styles.links    } >
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:priyagupta30302@gmail.com">priyagupta30302@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/feed/">linkedin.com/Priya</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/PriyaGupta30302">github.com/Priya</a>
          </li>
        </ul>
        <div className={styles.footerNav}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
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
