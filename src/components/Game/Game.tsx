import { ReactElement, useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { joinGame, rejoinGame } from "redux/reducers/gameState";
import PlayerResources from "./PlayerResources/PlayerResources";

import "./Game.scss";
import Players from "./Players/Players";
import { fetchCards } from "../../redux/reducers/cards";

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
    <Box sx={{ height: "100vh" }}>
      <Grid container height={"100%"} direction={"column"} columns={14}>
        <Grid item xs={8}>
          <Players />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      <Typography variant={"h6"} className={"self-player-resources"}>
        Player Resources
        {player && <PlayerResources resources={player?.resources} />}
        <Button onClick={addRandomPlayer} variant={"outlined"}>
          Add Player
        </Button>
      </Typography>
    </Box>
  );
};

export default Game;
