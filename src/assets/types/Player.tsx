import Resources from "./Resources";
import Race, { emptyRace } from "./Race";

export interface Player {
  id: string;
  name: string;
  resources: Resources;
  race: Race;
  cards: string[];
}

export const emptyPlayer: () => Player = () => ({
  id: "",
  name: "",
  resources: {},
  race: emptyRace(),
  cards: [],
});

export default Player;
