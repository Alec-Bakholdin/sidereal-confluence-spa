import GamePhase from "./GamePhase";
import Player from "./Player";
import { ConfluenceCard } from "./ConfluenceCard";

export interface GameState {
  turn: number;
  phase: GamePhase;
  isGameStarted: boolean;
  isGameOver: boolean;

  confluenceList: ConfluenceCard[];

  availableColonies: string[];
  availableResearchTeams: string[];

  colonyBidTrack: number[];
  researchTeamBidTrack: number[];

  pendingResearches: string[];

  players: { [id: string]: Player };
}

export default GameState;
