import { ReactElement } from "react";
import { useAppSelector } from "redux/hooks";
import { selectGame } from "redux/reducers/game";
import { Box } from "@mui/material";
import { StompSessionProvider } from "react-stomp-hooks";
import Lobby from "./Lobby/Lobby";

export function Game(): ReactElement {
  const game = useAppSelector(selectGame);

  return (
    <StompSessionProvider url={`${process.env.REACT_APP_API_URL}/ws`}>
      {game?.state === "Lobby" ? (
        <Lobby />
      ) : (
        <Box height={"100%"} className={"center-box"}>
          {game?.state}
        </Box>
      )}
    </StompSessionProvider>
  );
}

export default Game;
