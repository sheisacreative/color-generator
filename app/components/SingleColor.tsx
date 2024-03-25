import React from "react";
import styles from "./SingleColor.module.css";
import { useGlobalContext } from "../context";

type Color = {
  color: string;
};

const SingleColor = ({ color }: Color) => {
  const context = useGlobalContext();
  const selectedColor = context?.selectedColor;
  const copyToClipboard = context?.copyToClipboard;

  const handleClick = () => {
    if (copyToClipboard && selectedColor) {
      copyToClipboard({ color: `#${color}` });
    }
  };

  return (
    <div
      className={styles.singleColor}
      style={{ backgroundColor: `#${color}` }}
    >
      <div className={styles.colorHover} onClick={handleClick}>
        <p className={`font-sm`}>{`#${color}`}</p>
        <p className={styles.copyLink}>Copy</p>
      </div>
    </div>
  );
};

export default SingleColor;
