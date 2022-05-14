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
import {
  APP_NEXT_PHASE,
  APP_START_GAME,
  APP_UPDATE_ECONOMY_ACTIONS,
  UpdateEconomyActionsClientMessage,
} from "assets/types/SocketTopics";
import { selectEconomyActions } from "redux/reducers/economy";

export const Game = function (): ReactElement {
  const dispatch = useAppDispatch();
  const { playerId, playerName, isFresh, gameState } = useAppSelector(
    (state) => state.gameState
  );
  const economyActions = useAppSelector(selectEconomyActions);
  const player = gameState.players[playerId ?? ""];
  const stompClient = useStompClient();

  // rejoin game if cookies are set and game has not been fetched yet
  useEffect(() => {
    if (!isFresh && playerId && playerName) {
      dispatch(rejoinGame({ playerId, playerName }));
    }
    dispatch(fetchCards());
  }, [dispatch, isFresh, playerId, playerName]);
  useEffect(() => {
    stompClient?.publish({
      destination: APP_UPDATE_ECONOMY_ACTIONS,
      body: JSON.stringify({
        playerId,
        actions: economyActions,
      } as UpdateEconomyActionsClientMessage),
    });
  }, [playerId, stompClient, economyActions]);
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
  const confluenceCard =
    gameState.confluenceList[
      gameState.turn > 0 ? gameState.turn - 1 : gameState.turn
    ];

  return (
    <Box sx={{ height: "100vh" }} overflow={"clip"}>
      <Stack height={"100%"}>
        <Players />
        <Box width={"100%"} height={100} border={"1px solid white"}>
          <Typography variant={"h4"} textAlign={"center"}>
            Turn: {gameState.turn}, Phase: {gameState.phase}, Sharing:
            {confluenceCard?.sharingBonus}, Yengii:
            {confluenceCard?.yengiiSharingBonus}
          </Typography>
        </Box>
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
