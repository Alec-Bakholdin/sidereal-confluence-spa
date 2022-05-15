import Resources from "./Resources";

export type RaceName = "Caylion" | "Faderan" | "Yengii" | "Kjasjavikalimm";

export interface Race {
  name: RaceName;
  colonySupport: number;
  tiebreaker: number;

  startingColonies: number;
  startingResearchTeams: number;
  startingResources: Resources;
}

export const emptyRace: () => Race = () => ({
  name: "Caylion",
  colonySupport: 0,
  tiebreaker: 0,

  startingColonies: 0,
  startingResearchTeams: 0,
  startingResources: {},
});

export default Race;
