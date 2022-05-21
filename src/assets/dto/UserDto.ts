import GameDto from "./GameDto";

export interface UserDto {
  username: string;
  game?: GameDto;
}

export default UserDto;
