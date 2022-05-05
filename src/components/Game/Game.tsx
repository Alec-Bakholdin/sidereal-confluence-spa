import { ReactElement, useEffect } from "react";
import { Box, Drawer, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { rejoinGame } from "redux/reducers/gameState";

import "./Game.scss";
import PlayerResources from "./PlayerResources/PlayerResources";

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

  return (
    <Box sx={{ height: "100vh" }}>
      <Grid container height={"100%"}>
        <Grid item container xs={3} direction={"column"}>
          <Grid item width={"100%"} xs={3} className={"center-box"}>
            {isFresh && (
              <Typography>
                turn: {gameState.turn}, phase: {gameState.phase}
              </Typography>
            )}
          </Grid>
          <Grid item width={"100%"} xs={6} className={"center-box"}>
            converter cards, colonies, research teams
          </Grid>
          <Grid item width={"100%"} xs={3}>
            <Typography variant={"h4"}>My Resources</Typography>
            <PlayerResources resources={player?.resources} />
          </Grid>
        </Grid>
        <Grid item container xs={6} className={"center-box"}>
          trading, confluence stuff
        </Grid>
        <Grid item container xs={3} className={"center-box"}>
          players
        </Grid>
      </Grid>
    </Box>
  );
};

export default Game;
