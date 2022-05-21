import GameState from "../enums/GameState";
import GamePhase from "../enums/GamePhase";

export interface UpdateGameDto {
  state?: GameState;
  phase?: GamePhase;
}

export default UpdateGameDto;
