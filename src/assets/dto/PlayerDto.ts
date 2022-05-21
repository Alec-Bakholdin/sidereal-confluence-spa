import UserDto from "./UserDto";
import ResourcesDto from "./ResourcesDto";

export interface PlayerDto {
  user: UserDto;
  resources?: ResourcesDto;
  donations?: ResourcesDto;
}

export default PlayerDto;
