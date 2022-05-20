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
  APP_UPDATE_READY_STATUS,
  APP_START_GAME,
  APP_UPDATE_ECONOMY_ACTIONS,
  UpdateEconomyActionsClientMessage,
  UpdatePlayerReadyStatusClientMessage,
} from "assets/types/SocketTopics";
import { selectEconomyActions } from "redux/reducers/economy";
import Resources from "assets/types/Resources";

export const Game = function (): ReactElement {
  const dispatch = useAppDispatch();
  const { playerId, playerName, raceName, isFresh, gameState } = useAppSelector(
    (state) => state.gameState
  );
  const economyActions = useAppSelector(selectEconomyActions);
  const player = gameState.players[playerId ?? ""];
  const stompClient = useStompClient();

  // rejoin game if cookies are set and game has not been fetched yet
  useEffect(() => {
    if (!isFresh && playerId && playerName) {
      dispatch(
        rejoinGame({ playerId, playerName, raceName: raceName ?? "Caylion" })
      );
    }
    dispatch(fetchCards({}));
  }, [dispatch, isFresh, playerId, playerName, raceName]);
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
      joinGame({
        raceName: "Caylion",
        playerName: `Player ${Math.floor(Math.random() * 1000)}`,
      })
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
  const updateReadyState = () => {
    if (stompClient) {
      stompClient.publish({
        destination: APP_UPDATE_READY_STATUS,
        body: JSON.stringify({
          playerId,
          ready: !player.ready,
        } as UpdatePlayerReadyStatusClientMessage),
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
  const openResourceModal =
    (resources: Resources, isDonation: boolean) => () => {
      dispatch(
        openUpdateResourcesModal({
          resources,
          isDonation,
        })
      );
    };

  const confluenceCard =
    gameState.confluenceList[
      gameState.turn > 0 ? gameState.turn - 1 : gameState.turn
    ];

  return (
    <Box sx={{ height: "100vh" }} overflow={"clip"}>
      <Stack height={"100%"} key={"game-overview"}>
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
      <Stack
        direction={"row"}
        className={"self-player-summary"}
        bgcolor={"background.default"}
        spacing={2}
        key={"self-player-summary"}
      >
        <Stack
          className={"self-player-resources"}
          key={"self-player-resources"}
          direction={"row"}
          onClick={openResourceModal(player?.resources, false)}
        >
          <Typography variant={"h6"}>Resources</Typography>
          {player && <PlayerResources resources={player?.resources} />}
        </Stack>
        <Stack
          className={"self-player-resources"}
          key={"self-player-donations"}
          direction={"row"}
          onClick={openResourceModal(player?.donations, true)}
        >
          <Typography variant={"h6"}>Donations</Typography>
          {player && (
            <PlayerResources resources={player?.donations} donations />
          )}
        </Stack>
        {(!gameState.gameStarted || gameState.gameOver) && (
          <>
            <Button onClick={addRandomPlayer} variant={"outlined"}>
              Add Player
            </Button>
            <Button onClick={startGame} variant={"outlined"}>
              Start Game
            </Button>
          </>
        )}
        {gameState.gameStarted && !gameState.gameOver && (
          <>
            <Button
              key={"ready-button"}
              onClick={updateReadyState}
              variant={"outlined"}
              color={player.ready ? "success" : "error"}
            >
              {!player.ready && "NOT "}READY
            </Button>
            <Button key={"next phase"} onClick={nextPhase} variant={"outlined"}>
              Next Phase
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Game;
