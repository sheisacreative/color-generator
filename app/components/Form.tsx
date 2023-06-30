import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={`container ${styles.form}`}>
      <label htmlFor="colorText" className={`font-m ${styles.formLabel}`}>
        Pick a color
      </label>
      <label htmlFor="color" className={`font-m ${styles.formLabelHidden}`}>
        Pick a color
      </label>
      <div className={styles.colorBtnContainer}>
        <div className={styles.colorContainer}>
          <input
            type="text"
            placeholder="#F2421B"
            className={styles.textColorInput}
            name="colorText"
            id="colorText"
          />
          <div className={styles.colorInputWrapper}>
            <input
              type="color"
              name="color"
              id="color"
              value="#F2421B"
              className={styles.colorInput}
            />
          </div>
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
