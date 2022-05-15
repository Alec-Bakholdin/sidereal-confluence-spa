import React, { useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import MainMenu from "./components/MainMenu/MainMenu";
import Game from "./components/Game/Game";
import Modals from "./components/Modals";
import Snackbars from "./components/Snackbars";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { setPlayerInformation } from "./redux/reducers/gameState";
import { useCookies } from "react-cookie";
import SocketActions from "./socket/SocketActions";
import { RaceName } from "./assets/types/Race";

function App() {
  const { playerId, playerName, raceName } = useAppSelector(
    (state) => state.gameState
  );
  const dispatch = useAppDispatch();
  const [cookies, setCookie] = useCookies([
    "playerId",
    "playerName",
    "raceName",
  ]);
  useEffect(() => {
    if (cookies.playerId && cookies.playerName && cookies.raceName) {
      console.log("Restoring cookies", cookies);
      dispatch(
        setPlayerInformation({
          playerId: cookies.playerId,
          playerName: cookies.playerName,
          raceName: cookies.raceName as RaceName,
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
    if (raceName) {
      console.log(`Setting raceName cookie to ${raceName}`);
      setCookie("raceName", raceName);
    }
  }, [raceName, playerId, playerName, setCookie]);

  return (
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<MainMenu />} />
        <Route path={"/game"} element={<Game />} />
      </Routes>
      <SocketActions />
      <Modals />
      <Snackbars />
    </HashRouter>
  );
}

export default App;
