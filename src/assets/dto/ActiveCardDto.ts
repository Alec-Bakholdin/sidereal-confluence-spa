import CardDto from "./CardDto";

export interface ActiveCardDto {
  id: string;
  upgraded: boolean;
  card: CardDto;
}

export default ActiveCardDto;
