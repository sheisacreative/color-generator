import React from "react";
import styles from "./Colors.module.css";
import { useGlobalContext } from "../context";

const Colors = () => {
  const { selectedColor } = useGlobalContext();

  return (
    <div className="container">
      <div className={styles.titleContainer}>
        <h2 className={`title-s`}>shades</h2>
        <div className={styles.line} />
        <h2 className={`title-s`}>tints</h2>
      </div>
      <div className={styles.colorsContainer}>
        <div className={styles.shades}>
          <div className={styles.singleColor}>
            {/* <p className={`font-sm ${styles.colorName}`}>#123456</p>
            <p className={styles.copyLink}>Copy</p> */}
          </div>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
        </div>
        <div className={styles.selectedColor}></div>
        <div className={styles.tints}>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
          <div className={styles.singleColor}></div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
