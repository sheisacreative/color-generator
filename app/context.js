"use client";
import React, { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const cat = "meow";

  return <AppContext.Provider value={{ cat }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);
