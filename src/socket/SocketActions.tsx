import { ReactElement } from "react";
import { useSubscription } from "react-stomp-hooks";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Player from "../assets/types/Player";
import { addPlayer, updatePlayerResources } from "../redux/reducers/gameState";
import {
  TOPIC_PLAYER_JOINED_GAME,
  TOPIC_PLAYER_UPDATED_RESOURCES,
  UpdatePlayerResourcesServerMessage,
} from "../assets/types/SocketTopics";

export function SocketActions(): ReactElement {
  const dispatch = useAppDispatch();
  useSubscription(TOPIC_PLAYER_JOINED_GAME, (message) => {
    const player = JSON.parse(message.body) as Player;
    console.log(`${player.name} joined the game`);
    dispatch(addPlayer(player));
  });

  useSubscription(TOPIC_PLAYER_UPDATED_RESOURCES, (message) => {
    console.log("got the message");
    const playerUpdateMsg = JSON.parse(
      message.body
    ) as UpdatePlayerResourcesServerMessage;
    dispatch(updatePlayerResources(playerUpdateMsg));
  });

  return <></>;
}

export default SocketActions;
