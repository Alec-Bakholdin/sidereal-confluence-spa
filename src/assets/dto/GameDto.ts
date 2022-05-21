import GameState from "../enums/GameState";
import GamePhase from "../enums/GamePhase";
import PlayerDto from "./PlayerDto";

export interface GameDto {
  id: number;
  state: GameState;
  phase: GamePhase;
  players: { [username: string]: PlayerDto };
}

export default GameDto;
