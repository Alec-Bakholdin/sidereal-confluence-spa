import ResourcesDto from "./ResourcesDto";

export interface ResearchTeamDto {
  name: string;

  era: number;
  points: number;
  resultingTechnology: string;

  researchOptions: ResourcesDto;
}

export default ResearchTeamDto;
