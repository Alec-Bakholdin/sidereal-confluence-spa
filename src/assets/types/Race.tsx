import Resources from "./Resources";

export interface Race {
  colonySupport: number;
  tiebreaker: number;

  startingColonies: number;
  startingResearchTeams: number;
  startingResources: Resources;

  startingConverterCards: string[];
  availableConverterCards: string[];
}

export default Race;
