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
  updateGameStateWholesale,
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
  TOPIC_ERROR,
  TOPIC_UPDATE_CARD,
  TOPIC_UPDATE_GAME_STATE_WHOLESALE,
  TOPIC_UPDATE_ALL_CARDS,
} from "assets/types/SocketTopics";
import { addError } from "../redux/reducers/errors";
import { Card } from "../assets/types/Cards";
import { updateAllCards, updateCard } from "../redux/reducers/cards";
import GameState from "../assets/types/GameState";

export function SocketActions(): ReactElement {
  const dispatch = useAppDispatch();
  useSubscription(TOPIC_PLAYER_JOINED_GAME, (message) => {
    const player = JSON.parse(message.body) as Player;
    console.log(`${player.name} joined the game`);
    dispatch(addPlayer(player));
  });

  useSubscription(TOPIC_PLAYER_UPDATED_RESOURCES, (message) => {
    const playerUpdateMsg = JSON.parse(
      message.body
    ) as UpdatePlayerResourcesServerMessage;
    console.log("Updating player resources", playerUpdateMsg);
    dispatch(updatePlayerResources(playerUpdateMsg));
  });

  useSubscription(TOPIC_UPDATE_GAME_STATE, (message) => {
    const gameStateUpdate = JSON.parse(
      message.body
    ) as UpdateGameStateServerMessage;
    console.log("Updating game state", gameStateUpdate);
    dispatch(updateGameState(gameStateUpdate));
  });

  useSubscription(TOPIC_TRANSFER_CARD, (message) => {
    const transferCardMsg = JSON.parse(
      message.body
    ) as TransferCardServerMessage;
    console.log("Transferring card", transferCardMsg);
    dispatch(transferCard(transferCardMsg));
  });

  useSubscription(TOPIC_ACQUIRE_CARD, (message) => {
    const acquireCardMsg = JSON.parse(message.body) as AcquireCardServerMessage;
    console.log("Acquiring card", acquireCardMsg);
    dispatch(acquireCard(acquireCardMsg));
  });

  useSubscription(TOPIC_REMOVE_ACTIVE_CARD, (message) => {
    const removeActiveCardMsg = JSON.parse(
      message.body
    ) as AcquireCardServerMessage;
    console.log("Removing active card", removeActiveCardMsg);
    dispatch(removeActiveCard(removeActiveCardMsg));
  });

  useSubscription(TOPIC_ERROR, (message) => {
    console.log("Error: " + message.body);
    const error = message.body as string;
    dispatch(addError(error));
  });

  useSubscription(TOPIC_UPDATE_CARD, (message) => {
    const card = JSON.parse(message.body) as Card;
    console.log("Updating card: ", card);
    dispatch(updateCard(card));
  });

  useSubscription(TOPIC_UPDATE_GAME_STATE_WHOLESALE, (message) => {
    const gameState = JSON.parse(message.body) as GameState;
    console.log("Updating game state wholesale: ", gameState);
    dispatch(updateGameStateWholesale(gameState));
  });

  useSubscription(TOPIC_UPDATE_ALL_CARDS, (message) => {
    const allCards = JSON.parse(message.body) as { [key: string]: Card };
    console.log("Updating all cards", allCards);
    dispatch(updateAllCards(allCards));
  });

  return <></>;
}

export default SocketActions;
