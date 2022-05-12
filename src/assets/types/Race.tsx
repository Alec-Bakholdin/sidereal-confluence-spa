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

export const emptyRace: () => Race = () => ({
  colonySupport: 0,
  tiebreaker: 0,

  startingColonies: 0,
  startingResearchTeams: 0,
  startingResources: {},

  startingConverterCards: [],
  availableConverterCards: [],
});

export default Race;
