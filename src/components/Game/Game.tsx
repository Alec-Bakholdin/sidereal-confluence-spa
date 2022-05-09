import { ReactElement, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { joinGame, rejoinGame } from "redux/reducers/gameState";
import PlayerResources from "./PlayerResources/PlayerResources";
import "./Game.scss";
import Players from "./Players/Players";
import { fetchCards } from "redux/reducers/cards";
import CurrentPlayerInfo from "./CurrentPlayerInfo/CurrentPlayerInfo";
import { openUpdateResourcesModal } from "redux/reducers/modals";
import { useStompClient } from "react-stomp-hooks";
import { APP_NEXT_PHASE, APP_START_GAME } from "assets/types/SocketTopics";

export const Game = function (): ReactElement {
  const dispatch = useAppDispatch();
  const { playerId, playerName, isFresh, gameState } = useAppSelector(
    (state) => state.gameState
  );
  const player = gameState.players[playerId ?? ""];
  const stompClient = useStompClient();

  // rejoin game if cookies are set and game has not been fetched yet
  useEffect(() => {
    if (!isFresh && playerId && playerName) {
      dispatch(rejoinGame({ playerId, playerName }));
    }
    dispatch(fetchCards());
  });
  const addRandomPlayer = () => {
    dispatch(
      joinGame({ playerName: `Player ${Math.floor(Math.random() * 1000)}` })
    );
  };
  const startGame = () => {
    if (stompClient) {
      stompClient.publish({
        destination: APP_START_GAME,
        body: "",
      });
    }
  };
  const nextPhase = () => {
    if (stompClient) {
      stompClient.publish({
        destination: APP_NEXT_PHASE,
        body: "",
      });
    }
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
        {(!gameState.isGameStarted || gameState.isGameOver) && (
          <>
            <Button onClick={addRandomPlayer} variant={"outlined"}>
              Add Player
            </Button>
            <Button onClick={startGame} variant={"outlined"}>
              Start Game
            </Button>
          </>
        )}
        {gameState.isGameStarted && !gameState.isGameOver && (
          <Button onClick={nextPhase} variant={"outlined"}>
            Next Phase
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Game;
