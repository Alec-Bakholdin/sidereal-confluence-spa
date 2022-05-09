import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import allCards from "./mocks/allCards.json";
import newGame from "./mocks/newGame.json";
import joinGame from "./mocks/joinGame.json";

const axiosLiveInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const axiosMockInstance = axios.create();
export const axiosMockAdapterInstance = new AxiosMockAdapter(
  axiosMockInstance,
  { delayResponse: 300 }
);
axiosMockAdapterInstance.onGet("/allCards").reply(200, allCards);
axiosMockAdapterInstance.onPost("/startNewGame").reply(200, newGame);
axiosMockAdapterInstance.onGet("/joinGame").reply(200, joinGame);
axiosMockAdapterInstance.onPost("/rejoinGame").reply(200, joinGame);

export default process.env.REACT_APP_USE_MOCK_API === "true"
  ? axiosMockInstance
  : axiosLiveInstance;
