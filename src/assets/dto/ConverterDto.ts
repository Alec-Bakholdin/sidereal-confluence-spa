import ResourcesDto from "./ResourcesDto";
import GamePhase from "../enums/GamePhase";

export interface ConverterDto {
  phase: GamePhase;
  input: ResourcesDto;
  output: ResourcesDto;
  donations: ResourcesDto;
}

export default ConverterDto;
