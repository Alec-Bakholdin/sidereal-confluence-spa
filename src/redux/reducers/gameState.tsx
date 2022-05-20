import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import GameState from "assets/types/GameState";
import api from "api";
import Player from "assets/types/Player";
import {
  AcquireCardServerMessage,
  RemoveActiveCardServerMessage,
  UpdateGameStateServerMessage,
  UpdatePlayerReadyStatusServerMessage,
  UpdatePlayerServerMessage,
} from "assets/types/SocketTopics";
import { RaceName } from "../../assets/types/Race";
import { templateAsyncThunk } from "../utils";

export interface JoinGamePayload {
  playerName: string;
  raceName: RaceName;
}
export interface JoinGameResponse {
  playerId: string;
  playerName: string;
  raceName: string;
  gameState: GameState;
}

export interface RejoinGamePayload {
  playerId: string;
  playerName: string;
  raceName: RaceName;
}

interface PlayerInformation {
  playerId: string;
  playerName: string;
  raceName: RaceName;
}

interface GameStateState {
  playerId?: string;
  playerName?: string;
  raceName?: RaceName;
  isFresh: boolean;
  gameState: GameState;
}

const initialState: GameStateState = {
  isFresh: false,
  gameState: {
    turn: 1,
    phase: "Trade",
    gameOver: false,
    gameStarted: false,

    confluenceList: [],

    availableColonies: [],
    availableResearchTeams: [],

    colonyBidTrack: [],
    researchTeamBidTrack: [],

    pendingResearches: [],

    players: {},
  },
};

export const newGame = templateAsyncThunk("/gameState/newGame", api.newGame);
export const joinGame = templateAsyncThunk("/gameState/joinGame", api.joinGame);
export const rejoinGame = templateAsyncThunk(
  "/gameState/rejoinGame",
  api.rejoinGame
);

export const gameStateSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    setPlayerInformation: (state, action: PayloadAction<PlayerInformation>) => {
      state.playerId = action.payload.playerId;
      state.playerName = action.payload.playerName;
      state.raceName = action.payload.raceName;
    },
    addPlayer: (state, action: PayloadAction<Player>) => {
      state.gameState.players[action.payload.id] = action.payload;
    },
    updatePlayer: (state, action: PayloadAction<UpdatePlayerServerMessage>) => {
      if (action.payload && state.gameState.players[action.payload.playerId]) {
        const player = state.gameState.players[action.payload.playerId];
        state.gameState.players[action.payload.playerId] = {
          ...player,
          ...action.payload,
        };
      }
    },
    updatePlayerReady: (
      state,
      action: PayloadAction<UpdatePlayerReadyStatusServerMessage>
    ) => {
      if (
        !action.payload ||
        !state.gameState.players[action.payload.playerId]
      ) {
        return;
      }
      const { playerId, ready } = action.payload;
      state.gameState.players[playerId].ready = ready;
    },
    acquireCard: (state, action: PayloadAction<AcquireCardServerMessage>) => {
      if (
        !action.payload ||
        !state.gameState.players[action.payload.playerId]
      ) {
        return;
      }
      const { playerId, cardId } = action.payload;
      const player = state.gameState.players[playerId];
      player.inactiveCards = player.inactiveCards.filter(
        (card) => card !== cardId
      );
      if (!player.cards.includes(cardId)) {
        player.cards.push(cardId);
      }
    },
    removeActiveCard: (
      state,
      action: PayloadAction<RemoveActiveCardServerMessage>
    ) => {
      if (
        !action.payload ||
        !state.gameState.players[action.payload.playerId]
      ) {
        return;
      }
      const { playerId, cardId } = action.payload;
      const player = state.gameState.players[playerId];
      player.cards = player.cards.filter((card) => card !== cardId);
    },
    updateGameState: (
      state,
      action: PayloadAction<UpdateGameStateServerMessage>
    ) => {
      console.log(action.payload);
      if (action.payload) {
        state.gameState = { ...state.gameState, ...action.payload };
      }
    },
    updateGameStateWholesale: (state, action: PayloadAction<GameState>) => {
      state.gameState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(joinGame.fulfilled, (state, action) => {
      state.playerId = action.payload.playerId;
      state.playerName = action.payload.playerName;
      state.gameState = action.payload.gameState;
      state.raceName = action.payload.raceName as RaceName;
      console.log(`Successfully joined game as player ${state.playerId}`);
      console.log("gameState: ", state.gameState);
    });
    builder.addCase(joinGame.pending, (state) => {
      state.isFresh = true;
    });
    builder.addCase(joinGame.rejected, (state) => {
      state.isFresh = false;
    });
    builder.addCase(rejoinGame.fulfilled, (state, action) => {
      state.playerId = action.payload.playerId;
      state.playerName = action.payload.playerName;
      state.gameState = action.payload.gameState;
      state.raceName = action.payload.raceName as RaceName;
      console.log(`Successfully rejoined game as player ${state.playerId}`);
      console.log("gameState: ", state.gameState);
    });
    builder.addCase(rejoinGame.pending, (state) => {
      state.isFresh = true;
    });
  },
});

export const selectGameState = (state: RootState) => state.gameState.gameState;
export const selectPlayer = (state: RootState) =>
  state.gameState.gameState.players[state.gameState.playerId ?? ""] ??
  ({} as Player);
export const selectPlayerById = (playerId?: string) => (state: RootState) =>
  state.gameState.gameState.players[playerId ?? ""] ?? {};
export const selectPlayerName = (state: RootState) =>
  state.gameState.playerName;
export const selectPlayerId = (state: RootState) => state.gameState.playerId;
export const selectFreshGameState = (state: RootState) =>
  state.gameState.isFresh;

export const {
  setPlayerInformation,
  addPlayer,
  acquireCard,
  removeActiveCard,
  updateGameState,
  updateGameStateWholesale,
  updatePlayerReady,
  updatePlayer,
} = gameStateSlice.actions;

export default gameStateSlice.reducer;
