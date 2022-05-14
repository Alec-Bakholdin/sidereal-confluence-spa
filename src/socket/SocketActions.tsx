import { ReactElement } from "react";
import { useSubscription } from "react-stomp-hooks";
import { useAppDispatch } from "../redux/hooks";
import Player from "../assets/types/Player";
import {
  addPlayer,
  updateGameState,
  updatePlayerResources,
  transferCard,
  acquireCard,
  removeActiveCard,
} from "redux/reducers/gameState";
import {
  TOPIC_PLAYER_JOINED_GAME,
  TOPIC_PLAYER_UPDATED_RESOURCES,
  TOPIC_UPDATE_GAME_STATE,
  UpdateGameStateServerMessage,
  UpdatePlayerResourcesServerMessage,
  TOPIC_TRANSFER_CARD,
  TransferCardServerMessage,
  TOPIC_ACQUIRE_CARD,
  AcquireCardServerMessage,
  TOPIC_REMOVE_ACTIVE_CARD,
} from "assets/types/SocketTopics";

export function SocketActions(): ReactElement {
  const dispatch = useAppDispatch();
  useSubscription(TOPIC_PLAYER_JOINED_GAME, (message) => {
    const player = JSON.parse(message.body) as Player;
    console.log(`${player.name} joined the game`);
    dispatch(addPlayer(player));
  });

  useSubscription(TOPIC_PLAYER_UPDATED_RESOURCES, (message) => {
    console.log("Updating player resources");
    const playerUpdateMsg = JSON.parse(
      message.body
    ) as UpdatePlayerResourcesServerMessage;
    dispatch(updatePlayerResources(playerUpdateMsg));
  });

  useSubscription(TOPIC_UPDATE_GAME_STATE, (message) => {
    console.log("Updating game state");
    const gameStateUpdate = JSON.parse(
      message.body
    ) as UpdateGameStateServerMessage;
    dispatch(updateGameState(gameStateUpdate));
  });

  useSubscription(TOPIC_TRANSFER_CARD, (message) => {
    console.log("Transferring card");
    const transferCardMsg = JSON.parse(
      message.body
    ) as TransferCardServerMessage;
    dispatch(transferCard(transferCardMsg));
  });

  useSubscription(TOPIC_ACQUIRE_CARD, (message) => {
    console.log("Acquiring card");
    const acquireCardMsg = JSON.parse(message.body) as AcquireCardServerMessage;
    dispatch(acquireCard(acquireCardMsg));
  });

  useSubscription(TOPIC_REMOVE_ACTIVE_CARD, (message) => {
    console.log("Removing active card");
    const removeActiveCardMsg = JSON.parse(
      message.body
    ) as AcquireCardServerMessage;
    dispatch(removeActiveCard(removeActiveCardMsg));
  });

  return <></>;
}

export default SocketActions;
