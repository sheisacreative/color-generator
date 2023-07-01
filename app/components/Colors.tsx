"use client";
import React from "react";
import styles from "./Colors.module.css";
import { useGlobalContext } from "../context";
import Values from "values.js";

const Colors = () => {
  const { selectedColor } = useGlobalContext();

  const color = new Values(selectedColor);
  const tints = color.tints(10).slice(0, 9).reverse();
  const shades = color.shades(10).slice(0, 9);

  const iterateOverColors = (colorArray: Array<Values>) => {
    return colorArray.map((color, index) => {
      return (
        <div
          className={styles.singleColor}
          key={index}
          style={{ backgroundColor: `#${color.hex}` }}
        >
          <div className={styles.colorHover}>
            <p className={`font-sm ${styles.colorName}`}>{`#${color.hex}`}</p>
            <p className={styles.copyLink}>Copy</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className={styles.titleContainer}>
        <h2 className={`title-s`}>tints</h2>
        <div className={styles.line} />
        <h2 className={`title-s`}>shades</h2>
      </div>
      <div className={styles.colorsContainer}>
        <div className={styles.tints}>{iterateOverColors(tints)}</div>
        <div
          className={styles.selectedColor}
          style={{ backgroundColor: selectedColor }}
        ></div>
        <div className={styles.shades}>{iterateOverColors(shades)}</div>
      </div>
    </div>
  );
};

export default Colors;
