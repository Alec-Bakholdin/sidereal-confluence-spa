import axiosApi from "./axios";
import CredentialsDto from "../assets/dto/CredentialsDto";
import UserDto from "../assets/dto/UserDto";
import SignUpDto from "../assets/dto/SignUpDto";
import GameDto from "../assets/dto/GameDto";
import JoinGameDto from "../assets/dto/JoinGameDto";
import DestroyGameDto from "../assets/dto/DestroyGameDto";

export const api = {
  signIn: (credentialsDto: CredentialsDto) =>
    axiosApi.post<UserDto>("/signIn", credentialsDto),
  signUp: (signUpDto: SignUpDto) =>
    axiosApi.post<UserDto>("/signUp", signUpDto),
  signOut: () => axiosApi.post("/signOut"),

  user: () => axiosApi.get<UserDto>("/user"),

  game: {
    create: () => axiosApi.post<GameDto>("/game/create"),
    join: (joinGameDto: JoinGameDto) =>
      axiosApi.post<GameDto>("/game/join", joinGameDto),
    destroy: (destroyGameDto: DestroyGameDto) =>
      axiosApi.post("/game/destroy", destroyGameDto),
  },
};

export default api;
