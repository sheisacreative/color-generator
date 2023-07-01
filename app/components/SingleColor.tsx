import React from "react";
import styles from "./SingleColor.module.css";

type Color = {
  color: string;
};

const SingleColor = ({ color }: Color) => {
  return (
    <div
      className={styles.singleColor}
      style={{ backgroundColor: `#${color}` }}
    >
      <div className={styles.colorHover}>
        <p className={`font-sm`}>{`#${color}`}</p>
        <p className={styles.copyLink}>Copy</p>
      </div>
    </div>
  );
};

export default SingleColor;
