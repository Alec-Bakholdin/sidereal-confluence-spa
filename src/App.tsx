import React, { useEffect } from "react";

import MainMenu from "./layout/MainMenu/MainMenu";
import Modals from "./Modals";
import Snackbars from "./components/Snackbars";
import SocketActions from "./socket/SocketActions";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { selectAuth, testAuth } from "./redux/reducers/auth";
import SignInPage from "./layout/SignInPage/SignInPage";
import { Box } from "@mui/material";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";
import SiderealAppBar from "./layout/SiderealAppBar/SiderealAppBar";
import { selectGame } from "./redux/reducers/game";
import Game from "./layout/Game/Game";

function App() {
  const dispatch = useAppDispatch();
  const { loading, authenticated } = useAppSelector(selectAuth);
  const game = useAppSelector(selectGame);
  useEffect(() => {
    dispatch(testAuth({}));
  }, [dispatch]);

  return (
    <Box height={"100vh"}>
      {loading ? (
        <LoadingIndicator />
      ) : !authenticated ? (
        <SignInPage />
      ) : (
        <>
          <SiderealAppBar />
          {game ? <Game /> : <MainMenu />}
          <SocketActions />
          <Modals />
        </>
      )}
      <Snackbars />
    </Box>
  );
}

export default App;
