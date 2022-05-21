import ResourceType from "../enums/ResourceType";

export type ResourcesDto = { [resourceType in ResourceType]: number };
export default ResourcesDto;
