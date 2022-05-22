import { ReactElement } from "react";
import CardBase from "../CardBase";
import { Stack } from "@mui/material";
import ConverterElement from "../../BaseElements/Converter/ConverterElement";
import ActiveCardDto from "assets/dto/ActiveCardDto";
import ConverterDto from "assets/dto/ConverterDto";

export function ConverterCardElement({
  activeConverterCard,
}: {
  activeConverterCard: ActiveCardDto;
}): ReactElement {
  if (activeConverterCard.card.cardType !== "ConverterCard") {
    throw Error("Card type should be ConverterCard");
  }

  const converterElementFromObj = (
    converterObj: ConverterDto,
    index: number
  ) => (
    <ConverterElement
      converter={converterObj}
      key={`${index}`}
      selected={true}
      onClick={() => {}}
    />
  );

  const { converterCard } = activeConverterCard.card;
  return (
    <>
      <CardBase
        title={
          activeConverterCard.upgraded
            ? converterCard.backName
            : converterCard.frontName
        }
      >
        <Stack>
          {activeConverterCard.upgraded
            ? converterCard.backConverters?.map(converterElementFromObj)
            : converterCard.frontConverters?.map(converterElementFromObj)}
        </Stack>
      </CardBase>
    </>
  );
}

export default ConverterCardElement;
