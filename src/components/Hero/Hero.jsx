import React from 'react';
import { Link } from 'react-scroll';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const handleDownload = () => {
    const pdfUrl = getImageUrl("assets/priya-resume.pdf"); // Ensure the correct path to your CV
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "priya-resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <button className={styles.downloadBtn} onClick={handleDownload}>Download CV</button>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
