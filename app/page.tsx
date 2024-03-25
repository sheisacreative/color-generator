import Colors from "./components/Colors";
import Form from "./components/Form";
import Hero from "./components/Hero";
import React from "react";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Hero />
      <Form />
      <Colors />
      <ToastContainer position="top-center" />
    </>
  );
}
