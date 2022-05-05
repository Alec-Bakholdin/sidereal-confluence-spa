import React from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import dark from "assets/themes/dark";

import store from "redux/store";

import { Routes, Route, HashRouter } from "react-router-dom";
import MainMenu from "./components/MainMenu/MainMenu";
import Game from "./components/Game/Game";
import { Provider } from "react-redux";
import Modals from "./components/Modals";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Provider store={store}>
        <CssBaseline />
        <HashRouter>
          <Routes>
            <Route path={"/"} element={<MainMenu />} />
            <Route path={"/game"} element={<Game />} />
          </Routes>
          <Modals />
        </HashRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
