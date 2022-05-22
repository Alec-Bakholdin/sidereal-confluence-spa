import CardType from "../enums/CardType";
import ColonyDto from "./ColonyDto";
import ConverterCardDto from "./ConverterCardDto";
import ResearchTeamDto from "./ResearchTeamDto";

export interface CardDto {
  id: string;
  cardType: CardType;

  converterCard: ConverterCardDto;
  colony: ColonyDto;
  researchTeam: ResearchTeamDto;
}
export default CardDto;
