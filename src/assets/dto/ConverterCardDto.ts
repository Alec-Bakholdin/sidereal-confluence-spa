import RaceType from "../enums/RaceType";
import ConverterDto from "./ConverterDto";

export interface ConverterCardDto {
  era: number;
  starting: boolean;
  upgradeTech1: string;
  upgradeTech2: string;
  race: RaceType;
  frontName: string;
  frontConverters: ConverterDto[];
  backName: string;
  backConverters: ConverterDto[];
}

export default ConverterCardDto;
