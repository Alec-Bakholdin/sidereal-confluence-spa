import React from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import dark from "assets/themes/dark";

import { Routes, Route, HashRouter } from "react-router-dom";
import MainMenu from "./MainMenu/MainMenu";
import Game from "./Game/Game";
import Alec from "./Game/Alec";
import Daniel from "./Game/Daniel";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path={"/"} element={<MainMenu />} />
          <Route path={"/game"} element={<Game />} />
          <Route path={"/daniel"} element={<Daniel />} />
          <Route path={"/alec"} element={<Alec />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
