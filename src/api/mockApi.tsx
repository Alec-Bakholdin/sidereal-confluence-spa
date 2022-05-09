import { axiosMockAdapterInstance } from "./axios";
import allCards from "./mocks/allCards.json";
import joinGame from "./mocks/joinGame.json";
import newGame from "./mocks/newGame.json";

axiosMockAdapterInstance.onGet("/allCards").reply(200, allCards);
axiosMockAdapterInstance.onPost("/startNewGame").reply(200, newGame);
axiosMockAdapterInstance.onGet("/joinGame").reply(200, joinGame);
axiosMockAdapterInstance.onPost("/rejoinGame").reply(200, joinGame);
