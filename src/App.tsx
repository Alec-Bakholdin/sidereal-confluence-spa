import React from "react";

import {CssBaseline, ThemeProvider} from "@mui/material";
import dark from "assets/themes/dark";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./MainMenu/MainMenu";
import Game from "./Game/Game";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline/>
      <BrowserRouter basename={"/sidereal-confluence"}>
        <Routes>
          <Route path={"/"} element={<MainMenu/>}/>
          <Route path={"/game"} element={<Game/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
