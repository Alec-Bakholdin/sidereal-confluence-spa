import { ColonyType } from "../enums/ColonyType";
import ConverterDto from "./ConverterDto";

export interface ColonyDto {
  colonyType: ColonyType;
  name: string;
  frontType: ColonyType;
  frontConverter: ConverterDto;
  upgradeConverter: ConverterDto;
  backType: ColonyType;
  backConverter: ConverterDto;
}
export default ColonyDto;
