import Converter from "./Converter";
import Resources from "./Resources";

export type CardType = "ConverterCard" | "Colony" | "ResearchTeam";
export type ColonyType = "Jungle" | "Desert" | "Ice" | "Ocean" | "Any";

export interface Card {
  id: string;
  name: string;
  type: CardType;
}

export type ConverterCard = {
  era: number;

  isUpgraded: boolean;
  isConsumed: boolean;

  upgradeTech1?: string;
  upgradeTech2?: string;
  upgradedName: string;
  //acquisitionOptions?: Converter[];

  frontConverters: Converter[];
  backConverters: Converter[];
} & Card;

export type ResearchTeam = {
  era: number;
  resultingTechnology: string;
  researchOptions: Resources;
  points: number;
  researched: boolean;
} & Card;

export type Colony = {
  frontType: ColonyType;
  backType: ColonyType;
  frontConverter: Converter;
  upgradeConverter: Converter;
  backConverter: Converter;
  upgraded: boolean;
} & Card;
