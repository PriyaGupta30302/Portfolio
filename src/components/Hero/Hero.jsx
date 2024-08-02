import React from 'react';
import { Link } from 'react-scroll';
import styles from './Hero.module.css';
import heroImage from '../../assets/hero/heroImage.png';
// Use the direct download link
const resumeUrl = "https://drive.google.com/uc?export=download&id=1avhmclX9Nm_TQFMEVHVbCkQWE1TpMyfc";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Priya</h1>
        <p className={styles.description}>
          I'm a passionate Frontend Web Developer, eager to bring innovative ideas to life. Excited to start my career and be a part of your dynamic team!
        </p>
        <div className={styles.buttonsContainer}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={styles.contactBtn}
          >
            Contact Me
          </Link>
          <a
            href={resumeUrl} // Use the direct download link here
            download="Priya_Gupta_Resume.pdf" // Optional: specify the file name for download
            className={styles.downloadBtn}
          >
            Resume
          </a>
        </div>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
