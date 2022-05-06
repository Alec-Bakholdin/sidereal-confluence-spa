import Player from "./Player";
import Resources from "./Resources";

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
