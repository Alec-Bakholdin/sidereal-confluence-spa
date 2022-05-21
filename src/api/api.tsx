import axiosApi from "./axios";
import CredentialsDto from "../assets/dto/CredentialsDto";
import UserDto from "../assets/dto/UserDto";
import SignUpDto from "../assets/dto/SignUpDto";

export const api = {
  signIn: (credentialsDto: CredentialsDto) =>
    axiosApi.post<UserDto>("/signIn", credentialsDto),
  signUp: (signUpDto: SignUpDto) =>
    axiosApi.post<UserDto>("/signUp", signUpDto),
  signOut: () => axiosApi.post("/signOut"),

  user: () => axiosApi.get<UserDto>("/user"),
};

export default api;
