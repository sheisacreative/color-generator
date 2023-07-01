import React from "react";
import styles from "./SelectedColor.module.css";
import { useGlobalContext } from "../context";

const SelectedColor = () => {
  const context = useGlobalContext();
  const selectedColor = context?.selectedColor;
  const copyToClipboard = context?.copyToClipboard;

  const handleClick = () => {
    if (copyToClipboard && selectedColor) {
      copyToClipboard({ color: selectedColor });
    }
  };

  return (
    <div
      className={styles.selectedColor}
      style={{ backgroundColor: selectedColor }}
    >
      <div className={styles.colorHover} onClick={handleClick}>
        <p className={`font-sm`}>{selectedColor}</p>
        <p className={styles.copyLink}>Copy</p>
      </div>
    </div>
  );
};

export default SelectedColor;
