import UserDto from "./UserDto";
import ResourcesDto from "./ResourcesDto";

export interface UpdatePlayerDto {
  user: UserDto;
  resources?: ResourcesDto;
  donations?: ResourcesDto;
}

export default UpdatePlayerDto;
