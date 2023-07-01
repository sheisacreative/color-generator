"use client";
import React from "react";
import styles from "./Colors.module.css";
import { useGlobalContext } from "../context";
import Values from "values.js";
import SingleColor from "./SingleColor";

const Colors = () => {
  const { selectedColor } = useGlobalContext();

  const color = new Values(selectedColor);
  const tints = color.tints(10).slice(0, 9).reverse();
  const shades = color.shades(10).slice(0, 9);

  return (
    <div className="container">
      <div className={styles.titleContainer}>
        <h2 className={`title-s`}>tints</h2>
        <div className={styles.line} />
        <h2 className={`title-s`}>shades</h2>
      </div>
      <div className={styles.colorsContainer}>
        <div className={styles.tints}>
          {tints.map((tint, index) => {
            return <SingleColor key={index} color={tint.hex} />;
          })}
        </div>
        <div
          className={styles.selectedColor}
          style={{ backgroundColor: selectedColor }}
        ></div>
        <div className={styles.shades}>
          {shades.map((shade, index) => {
            return <SingleColor key={index} color={shade.hex} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Colors;
