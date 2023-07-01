"use client";
import React, { ChangeEvent, useState, FormEvent } from "react";
import styles from "./Form.module.css";
import { useGlobalContext } from "../context";

const Form = () => {
  const [tempTextColor, setTempTextColor] = useState("");
  const [tempSelectedColor, setTempSelectedColor] = useState("#f2421b");

  const { setSelectedColor, setTintsAndShades } = useGlobalContext();

  // Prevent the user to type non-hex values
  // Set selected color
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    const hexRegex = /[^0-9a-fA-F]/g;
    setTempTextColor(`#${e.target.value.replace(hexRegex, "")}`);

    if (e.target.value.length > 6) {
      setTempSelectedColor(e.target.value);
      setTintsAndShades();
    }
  };

  // Set selected color
  // Set text input color
  const setColorPicker = (e: ChangeEvent<HTMLInputElement>) => {
    setTempSelectedColor(e.target.value);
    setTempTextColor(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSelectedColor(tempSelectedColor);
  };

  return (
    <form
      className={`container ${styles.form}`}
      onSubmit={(e) => handleSubmit(e)}
    >
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
            value={tempTextColor}
            onInput={(e: ChangeEvent<HTMLInputElement>) => handleTextInput(e)}
            maxLength={7}
          />

          <div
            className={styles.colorInputWrapper}
            style={{ backgroundColor: tempSelectedColor }}
          >
            <input
              type="color"
              name="color"
              id="color"
              value="#F2421B"
              className={styles.colorInput}
              onInput={(e: ChangeEvent<HTMLInputElement>) => setColorPicker(e)}
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
