import Resources from "./Resources";
import Race, { emptyRace } from "./Race";

export interface Player {
  id: string;
  name: string;
  resources: Resources;
  donations: Resources;
  ready: boolean;
  race: Race;
  researchedTechnologies: string[];
  cards: string[];
  inactiveCards: string[];
}

export const emptyPlayer: () => Player = () => ({
  id: "",
  name: "",
  resources: {},
  donations: {},
  ready: false,
  race: emptyRace(),
  researchedTechnologies: [],
  cards: [],
  inactiveCards: [],
});

export default Player;
