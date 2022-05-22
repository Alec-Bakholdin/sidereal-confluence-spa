import UserDto from "./UserDto";
import ResourcesDto from "./ResourcesDto";
import RaceDto from "./RaceDto";
import ActiveCardDto from "./ActiveCardDto";

export interface PlayerDto {
  user: UserDto;
  ready?: boolean;
  resources?: ResourcesDto;
  donations?: ResourcesDto;
  race?: RaceDto;
  activeCards?: ActiveCardDto[];
}

export default PlayerDto;
