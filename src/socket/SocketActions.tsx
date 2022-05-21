import { ReactElement } from "react";
import { useSubscription } from "react-stomp-hooks";
import {
  USER_PLAYER_JOINED,
  USER_UPDATE_GAME,
  USER_UPDATE_PLAYER,
} from "./SocketTopics";
import { useAppDispatch } from "../redux/hooks";
import UpdateGameDto from "../assets/dto/UpdateGameDto";
import UpdatePlayerDto from "../assets/dto/UpdatePlayerDto";
import { addPlayer, updateGame, updatePlayer } from "../redux/reducers/game";
import PlayerDto from "../assets/dto/PlayerDto";

export function SocketActions(): ReactElement {
  const dispatch = useAppDispatch();
  useSubscription(USER_UPDATE_GAME, (message) => {
    const updateGameDto = JSON.parse(message.body) as UpdateGameDto;
    dispatch(updateGame(updateGameDto));
  });
  useSubscription(USER_UPDATE_PLAYER, (message) => {
    const updatePlayerDto = JSON.parse(message.body) as UpdatePlayerDto;
    dispatch(updatePlayer(updatePlayerDto));
  });
  useSubscription(USER_PLAYER_JOINED, (message) => {
    const playerDto = JSON.parse(message.body) as PlayerDto;
    dispatch(addPlayer(playerDto));
  });
  return <></>;
}

export default SocketActions;
