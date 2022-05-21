export const TOPIC_GAME_PLAYER_JOINED = (gameId: number) =>
  `/topic/game/${gameId}/playerJoined`;
export const TOPIC_GAME_UPDATE_GAME = (gameId: number) =>
  `/topic/game/${gameId}/updateGame`;
export const TOPIC_GAME_UPDATE_PLAYER = (gameId: number) =>
  `/topic/game/${gameId}/updatePlayer`;
export const TOPIC_GAME_ERRORS = (gameId: number) =>
  `/topic/game/${gameId}/errors`;
export const USER_ERRORS = "/user/queue/errors";

export const APP_CHOOSE_RACE = "/app/player/chooseRace";
export const APP_PLAYER_READY = "/app/player/ready";
