import { RaceType } from "../enums/RaceType";
import ResourcesDto from "./ResourcesDto";

export interface RaceDto {
  name: RaceType;
  colonySupport: number;
  tiebreaker: number;
  startingColonies: number;
  startingResearchTeams: number;
  startingResources: ResourcesDto;
}
export default RaceDto;
