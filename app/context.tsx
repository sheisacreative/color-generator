"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";

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
    console.log("Hey");
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(color);
        toast.success("Color copied! :)");
      } catch (e) {
        toast.error("Sorry! We couldn't copy");
      }
    } else {
      toast.error("Clipboard access not available");
    }

    navigator.clipboard;
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
