import axios from "axios";
import { ConverterCard } from "assets/types/Cards";
import { JoinGamePayload, JoinGameResponse } from "redux/reducers/gameState";
import GameState from "assets/types/GameState";

const axiosApi = axios.create({
  baseURL: "http://localhost:8080",
});

const api = {
  allCards: async () =>
    await axiosApi.get<{ [id: string]: ConverterCard }>("/allCards"),
  newGame: async () => await axiosApi.post<GameState>("/startNewGame"),
  joinGame: async (body: JoinGamePayload) => {
    return await axiosApi.post<JoinGameResponse>("/joinGame", body);
  },
};

export default api;
