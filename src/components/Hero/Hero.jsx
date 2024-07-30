import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Priya</h1>
        <p className={styles.description}>
          I'm a passionate Frontend Web Developer, eager to bring innovative ideas to life. Excited to start my career and be a part of your dynamic team!
        </p>
        <a className={styles.contactBtn} href="mailto:priyagupta30302@gmail.com">Contact Me</a>
        <button className={`${styles.downloadBtn}`} onClick={() => window.open('./assets/priya-resume.pdf')}>Download CV</button>
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
