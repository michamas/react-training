import "./App.css";
import React from "react";
import FunctionContextComponent from "./FunctionContextComponent.js";
import { ThemeProvider } from "./ThemeContext.js";

export default function App() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}
