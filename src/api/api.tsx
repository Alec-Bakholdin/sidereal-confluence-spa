import { ConverterCard } from "../assets/types/Cards";
import GameState from "assets/types/GameState";
import {
  JoinGamePayload,
  JoinGameResponse,
  RejoinGamePayload,
} from "redux/reducers/gameState";
import axiosApi from "./axios";

export const api = {
  allCards: async () =>
    await axiosApi.get<{ [id: string]: ConverterCard }>("/allCards"),
  newGame: async () => await axiosApi.post<GameState>("/startNewGame"),
  joinGame: async (body: JoinGamePayload) => {
    return await axiosApi.post<JoinGameResponse>("/joinGame", body);
  },
  rejoinGame: async (body: RejoinGamePayload) => {
    return await axiosApi.post<JoinGameResponse>("/rejoinGame", body);
  },
};

export default api;
