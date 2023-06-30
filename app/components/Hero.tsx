import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.titleBackground}>
      <h1 className={`${styles.title} container`}>
        The one & only
        <br />
        <span className={`font-l ${styles.bigText}`}>Color Generator</span>
      </h1>
    </div>
  );
};

export default Hero;
