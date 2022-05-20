import { Card } from "../assets/types/Cards";
import GameState from "assets/types/GameState";
import {
  JoinGamePayload,
  JoinGameResponse,
  RejoinGamePayload,
} from "redux/reducers/gameState";
import axiosApi from "./axios";
import CredentialsDto from "../assets/dto/CredentialsDto";
import UserDto from "../assets/dto/UserDto";
import SignUpDto from "../assets/dto/SignUpDto";

export type CardsDto = { [id: string]: Card };

export const api = {
  allCards: () => axiosApi.get<CardsDto>("/allCards"),
  newGame: () => axiosApi.post<GameState>("/startNewGame"),
  joinGame: (body: JoinGamePayload) =>
    axiosApi.post<JoinGameResponse>("/joinGame", body),
  rejoinGame: (body: RejoinGamePayload) =>
    axiosApi.post<JoinGameResponse>("/rejoinGame", body),

  signIn: (credentialsDto: CredentialsDto) =>
    axiosApi.post<UserDto>("/signIn", credentialsDto),
  signUp: (signUpDto: SignUpDto) =>
    axiosApi.post<UserDto>("/signUp", signUpDto),
  user: () => axiosApi.get<UserDto>("/user"),
};

export default api;
