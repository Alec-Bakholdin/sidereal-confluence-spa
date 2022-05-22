import { ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectGame } from "redux/reducers/game";
import { Box } from "@mui/material";
import { StompSessionProvider } from "react-stomp-hooks";
import Lobby from "./Lobby/Lobby";
import SocketActions from "socket/SocketActions";
import { getRaces } from "redux/reducers/races";
import InProgressGame from "./InProgressGame/InProgressGame";

export function Game(): ReactElement {
  const dispatch = useAppDispatch();
  const game = useAppSelector(selectGame);
  useEffect(() => {
    dispatch(getRaces({}));
  }, [dispatch]);

  return (
    <StompSessionProvider url={`${process.env.REACT_APP_API_URL}/ws`}>
      {game?.state === "Lobby" ? (
        <Lobby />
      ) : game?.state === "InProgress" ? (
        <InProgressGame game={game} />
      ) : (
        <Box height={"100%"} className={"center-box"}>
          {game?.state}
        </Box>
      )}
      {game && <SocketActions game={game} />}
    </StompSessionProvider>
  );
}

export default Game;
