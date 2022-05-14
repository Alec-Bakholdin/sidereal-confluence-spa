import Player from "./Player";
import Resources from "./Resources";
import GamePhase from "./GamePhase";
import ConfluenceCard from "./ConfluenceCard";

export const TOPIC_PLAYER_JOINED_GAME = "/topic/joinedGame";
export type PlayerJoinedGameServerMessage = Player;

export const TOPIC_PLAYER_UPDATED_RESOURCES = "/topic/updateResources";
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

export const APP_TRANSFER_CARD = "/app/transferCard";
export type TransferCardClientMessage = {
  currentOwnerPlayerId: string;
  newOwnerPlayerId: string;
  cardId: string;
};

export const TOPIC_TRANSFER_CARD = "/topic/transferCard";
export type TransferCardServerMessage = {
  currentOwnerPlayerId: string;
  newOwnerPlayerId: string;
  cardId: string;
};

export const APP_UPDATE_ECONOMY_ACTIONS = "/app/updateEconomyActions";
export interface EconomyAction {
  cardId: string;
  converterIndex: number;
}
export type UpdateEconomyActionsClientMessage = {
  playerId: string;
  actions: EconomyAction[];
};