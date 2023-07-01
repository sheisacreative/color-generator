"use client";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState("#f2421b");

  const setTintsAndShades = () => {
    return "hey";
  };

  return (
    <AppContext.Provider
      value={{ selectedColor, setSelectedColor, setTintsAndShades }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
