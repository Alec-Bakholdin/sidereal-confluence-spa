import UserDto from "./UserDto";
import ResourcesDto from "./ResourcesDto";
import RaceDto from "./RaceDto";

export interface UpdatePlayerDto {
  user: UserDto;
  resources?: ResourcesDto;
  donations?: ResourcesDto;
  race?: RaceDto;
}

export default UpdatePlayerDto;
