import React, { useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import MainMenu from "./layout/MainMenu/MainMenu";
import Modals from "./Modals";
import Snackbars from "./components/Snackbars";
import SocketActions from "./socket/SocketActions";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { selectAuth, testAuth } from "./redux/reducers/auth";
import SignInPage from "./components/SignInPage/SignInPage";
import { Box, CircularProgress } from "@mui/material";

function App() {
  const dispatch = useAppDispatch();
  const { loading, authenticated } = useAppSelector(selectAuth);
  useEffect(() => {
    dispatch(testAuth({}));
  }, [dispatch]);

  return (
    <HashRouter>
      {!authenticated && !loading && <SignInPage />}
      {loading && (
        <Box height={"100vh"} className={"center-box"}>
          <CircularProgress />
        </Box>
      )}
      {authenticated && !loading && (
        <>
          <Routes>
            <Route path={"/"} element={<MainMenu />} />
          </Routes>
          <SocketActions />
          <Modals />
        </>
      )}
      <Snackbars />
    </HashRouter>
  );
}

export default App;
