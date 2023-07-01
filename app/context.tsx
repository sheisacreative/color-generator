"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  copyToClipboard: ({ color }: Color) => Promise<void>;
};

const AppContext = createContext<AppContextType | null>(null);

type Color = {
  color: string;
};

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  const [selectedColor, setSelectedColor] = useState("#f2421b");

  const copyToClipboard = async ({ color }: Color) => {
    if (color) {
      console.log("Copied");
    }
  };

  return (
    <AppContext.Provider
      value={{ selectedColor, setSelectedColor, copyToClipboard }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
