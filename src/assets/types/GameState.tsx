import GamePhase from "./GamePhase";
import Player from "./Player";

export interface GameState {
  turn: number;
  phase: GamePhase;
  players: { [id: string]: Player };
}

export default GameState;
