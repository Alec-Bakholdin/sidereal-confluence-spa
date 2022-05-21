import GameState from "../enums/GameState";
import GamePhase from "../enums/GamePhase";
import UserDto from "./UserDto";

export interface GameUpdateDto {
  state?: GameState;
  phase?: GamePhase;
  users?: UserDto[];
}

export default GameUpdateDto;
