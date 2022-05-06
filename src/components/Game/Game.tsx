import { ReactElement, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { joinGame, rejoinGame } from "redux/reducers/gameState";
import PlayerResources from "./PlayerResources/PlayerResources";
import "./Game.scss";
import Players from "./Players/Players";
import { fetchCards } from "redux/reducers/cards";
import CurrentPlayerInfo from "./CurrentPlayerInfo/CurrentPlayerInfo";
import { openUpdateResourcesModal } from "../../redux/reducers/modals";

export const Game = function (): ReactElement {
  const dispatch = useAppDispatch();
  const { playerId, playerName, isFresh, gameState } = useAppSelector(
    (state) => state.gameState
  );
  const player = gameState.players[playerId ?? ""];

  // rejoin game if cookies are set and game has not been fetched yet
  useEffect(() => {
    if (!isFresh && playerId && playerName) {
      dispatch(rejoinGame({ playerId, playerName }));
    }
  });
  useEffect(() => {
    dispatch(fetchCards());
  }, []);
  const addRandomPlayer = () => {
    dispatch(
      joinGame({ playerName: `Player ${Math.floor(Math.random() * 1000)}` })
    );
  };

  return (
    <Box sx={{ height: "100vh" }} overflow={"clip"}>
      <Stack height={"100%"}>
        <Players />
        <CurrentPlayerInfo />
      </Stack>
      <Box className={"self-player-resources"} bgcolor={"background.default"}>
        <Typography
          variant={"h6"}
          onClick={() => dispatch(openUpdateResourcesModal())}
        >
          Resources
          {player && <PlayerResources resources={player?.resources} />}
        </Typography>
        <Button onClick={addRandomPlayer} variant={"outlined"}>
          Add Player
        </Button>
      </Box>
    </Box>
  );
};

export default Game;
