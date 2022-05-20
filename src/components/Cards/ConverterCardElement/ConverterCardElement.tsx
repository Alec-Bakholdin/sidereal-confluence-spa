import { ReactElement } from "react";
import CardBase from "../CardBase";
import { Stack } from "@mui/material";
import { ConverterCard } from "assets/types/Cards";
import ConverterElement from "../../BaseElements/Converter/ConverterElement";
import Converter from "assets/types/Converter";

export function ConverterCardElement({
  converterCard,
}: {
  converterCard: ConverterCard;
}): ReactElement {
  const converterElementFromObj = (converterObj: Converter, index: number) => (
    <ConverterElement
      converter={converterObj}
      key={`${index}`}
      selected={true}
      onClick={() => {}}
    />
  );

  return (
    <>
      <CardBase
        title={
          converterCard.upgraded
            ? converterCard.upgradedName
            : converterCard.name
        }
      >
        <Stack>
          {converterCard.upgraded
            ? converterCard.backConverters?.map(converterElementFromObj)
            : converterCard.frontConverters?.map(converterElementFromObj)}
        </Stack>
      </CardBase>
    </>
  );
}

export default ConverterCardElement;
