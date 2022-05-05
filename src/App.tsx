import React, { useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import MainMenu from "./components/MainMenu/MainMenu";
import Game from "./components/Game/Game";
import Modals from "./components/Modals";
import Snackbars from "./components/Snackbars";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  selectPlayerId,
  selectPlayerName,
  setPlayerInformation,
} from "./redux/reducers/gameState";
import { useCookies } from "react-cookie";

function App() {
  const playerId = useAppSelector(selectPlayerId);
  const playerName = useAppSelector(selectPlayerName);
  const dispatch = useAppDispatch();
  const [cookies, setCookie] = useCookies(["playerId", "playerName"]);
  useEffect(() => {
    if (cookies.playerId && cookies.playerName) {
      console.log(
        `Setting playerId: ${cookies.playerId} and playerName: ${cookies.playerName} from cookies`
      );
      dispatch(
        setPlayerInformation({
          playerId: cookies.playerId,
          playerName: cookies.playerName,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (playerId) {
      console.log(`Setting playerId cookie to ${playerId}`);
      setCookie("playerId", playerId);
    }
    if (playerName) {
      console.log(`Setting playerName cookie to ${playerName}`);
      setCookie("playerName", playerName);
    }
  }, [playerId, playerName, setCookie]);

  return (
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<MainMenu />} />
        <Route path={"/game"} element={<Game />} />
      </Routes>
      <Modals />
      <Snackbars />
    </HashRouter>
  );
}

export default App;
