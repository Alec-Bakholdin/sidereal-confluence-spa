import { ConverterCard } from "../assets/types/Cards";
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
import { AxiosResponse } from "axios";

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
  test: async () => {
    await axiosApi.get<string>("/test");
  },
  signIn: async (
    credentialsDto: CredentialsDto
  ): Promise<AxiosResponse<UserDto>> => {
    return await axiosApi.post("/signIn", credentialsDto);
  },
  user: async (): Promise<AxiosResponse<UserDto>> => {
    return await axiosApi.get("/user");
  },
  signUp: async (signUpDto: SignUpDto): Promise<AxiosResponse<UserDto>> => {
    return await axiosApi.post("/signUp", signUpDto);
  },
};

export default api;
