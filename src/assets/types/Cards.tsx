import Converter from "./Converter";

type CardType = "ConverterCard" | "Colony" | "ResearchTeam";

export interface ConverterCard {
  id: string;
  name: string;
  type: CardType;
  upgradeOptions?: Converter[];
  acquisitionOptions?: Converter[];
  frontConverters: Converter[];
  backConverters: Converter[];
}
