import { ReactElement } from "react";
import CardBase from "../CardBase";
import ConverterElement from "../../BaseElements/Converter/ConverterElement";
import { Stack } from "@mui/material";
import ActiveCardDto from "../../../assets/dto/ActiveCardDto";

export function ColonyElement({
  activeColonyCard,
}: {
  activeColonyCard: ActiveCardDto;
}): ReactElement {
  if (activeColonyCard.card.cardType !== "Colony") {
    throw Error("should be colony type");
  }
  const { colony } = activeColonyCard.card;

  return (
    <CardBase title={colony.name}>
      <Stack>
        <ConverterElement
          key={"colony-front-converter"}
          converter={
            activeColonyCard.upgraded
              ? colony.backConverter
              : colony.frontConverter
          }
          selected={true}
          onClick={() => {}}
        />
      </Stack>
    </CardBase>
  );
}

export default ColonyElement;
