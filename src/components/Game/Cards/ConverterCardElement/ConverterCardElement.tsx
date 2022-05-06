import { ReactElement } from "react";
import CardBase from "../CardBase";
import { Stack } from "@mui/material";
import { ConverterCard } from "assets/types/Cards";
import ConverterElement from "../Converter/ConverterElement";
import Converter from "assets/types/Converter";

export function ConverterCardElement({
  converterCard,
}: {
  converterCard: ConverterCard;
}): ReactElement {
  const converterElementFromObj = (converterObj: Converter) => (
    <ConverterElement converter={converterObj} />
  );

  return (
    <>
      <CardBase title={converterCard.name}>
        <Stack>
          {converterCard.frontConverters?.map(converterElementFromObj)}
          {converterCard.backConverters?.map(converterElementFromObj)}
          {converterCard.upgradeOptions?.map(converterElementFromObj)}
        </Stack>
      </CardBase>
    </>
  );
}

export default ConverterCardElement;
