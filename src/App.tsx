import React from "react";
import MainMenu from "./MainMenu/MainMenu";
import { ThemeProvider } from "@mui/material";
import dark from "assets/themes/dark";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <MainMenu />
    </ThemeProvider>
  );
}

export default App;
