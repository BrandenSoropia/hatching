import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "ui-kit";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">Hello!</div>
    </ThemeProvider>
  );
};

export default App;
