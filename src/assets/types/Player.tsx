import Resources from "./Resources";
import Race from "./Race";

export interface Player {
  id: string;
  name: string;
  resources: Resources;
  race: Race;
  cards: string[];
}

export default Player;
