import { ReactElement } from "react";
import CardBase from "../CardBase";
import { Stack } from "@mui/material";
import { ConverterCard } from "assets/types/Cards";
import ConverterElement from "../Converter/ConverterElement";
import Converter from "assets/types/Converter";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  selectEconomyActionsLookup,
  toggleEconomyAction,
} from "redux/reducers/economy";

export function ConverterCardElement({
  converterCard,
}: {
  converterCard: ConverterCard;
}): ReactElement {
  const dispatch = useAppDispatch();
  const economyActionsLookup = useAppSelector(selectEconomyActionsLookup);

  const converterElementFromObj = (converterObj: Converter, index: number) => (
    <ConverterElement
      converter={converterObj}
      key={`${index}`}
      selected={economyActionsLookup[converterCard.id]?.includes(index)}
      onClick={() => {
        dispatch(
          toggleEconomyAction({
            cardId: converterCard.id,
            converterIndex: index,
          })
        );
      }}
    />
  );

  return (
    <>
      <CardBase title={converterCard.name}>
        <Stack>
          {converterCard.isUpgraded
            ? converterCard.backConverters?.map(converterElementFromObj)
            : converterCard.frontConverters?.map(converterElementFromObj)}
        </Stack>
      </CardBase>
    </>
  );
}

export default ConverterCardElement;
