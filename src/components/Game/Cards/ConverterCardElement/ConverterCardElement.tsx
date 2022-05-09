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
  const converterElementFromObj =
    (keyPrefix: string) => (converterObj: Converter, index: number) =>
      (
        <ConverterElement
          converter={converterObj}
          key={`${keyPrefix}-${index}`}
        />
      );

  return (
    <>
      <CardBase title={converterCard.name}>
        <Stack>
          {converterCard.frontConverters?.map(converterElementFromObj("front"))}
          {converterCard.backConverters?.map(converterElementFromObj("back"))}
          {converterCard.upgradeOptions?.map((conv, i) => (
            <ConverterElement converter={conv} key={`upgrade-${i}`} upgrade />
          ))}
        </Stack>
      </CardBase>
    </>
  );
}

export default ConverterCardElement;
