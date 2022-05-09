import Player from "./Player";
import Resources from "./Resources";
import GamePhase from "./GamePhase";
import ConfluenceCard from "./ConfluenceCard";

export const TOPIC_PLAYER_JOINED_GAME = "/topic/joinedGame";
export type PlayerJoinedGameServerMessage = Player;

export const TOPIC_PLAYER_UPDATED_RESOURCES = "/topic/updatedResources";
export type UpdatePlayerResourcesServerMessage = {
  playerId: string;
  resources: Resources;
};

export const APP_UPDATE_PLAYER_RESOURCES = "/app/updateResources";
export type UpdatePlayerResourcesClientMessage = {
  playerId: string;
  resources: Resources;
};

export const APP_START_GAME = "/app/startGame";
export const APP_NEXT_PHASE = "/app/nextPhase";

export const TOPIC_UPDATE_GAME_STATE = "/topic/updateGameState";
export type UpdateGameStateServerMessage = {
  turn: number;
  phase: GamePhase;
  gameOver: boolean;
  gameStarted: boolean;

  confluenceList: ConfluenceCard[];

  availableColonies?: string[];
  availableResearchTeams?: string[];
  colonyBidTrack?: number[];
  researchTeamBidTrack?: number[];
};
