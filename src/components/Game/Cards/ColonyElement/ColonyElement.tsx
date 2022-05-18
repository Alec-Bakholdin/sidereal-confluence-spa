import { ReactElement } from "react";
import CardBase from "../CardBase";
import { Colony } from "assets/types/Cards";
import ConverterElement from "../../BaseElements/Converter/ConverterElement";
import { Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  selectEconomyActionsLookup,
  toggleEconomyAction,
} from "redux/reducers/economy";

export function ColonyElement({
  colonyObj,
}: {
  colonyObj: Colony;
}): ReactElement {
  const dispatch = useAppDispatch();
  const economyActionsLookup = useAppSelector(selectEconomyActionsLookup);

  return (
    <CardBase
      title={colonyObj.name}
      doubledWithCaylion={colonyObj.doubledWithCaylion}
    >
      <Stack>
        <ConverterElement
          key={"colony-front-converter"}
          converter={
            colonyObj.upgraded
              ? colonyObj.backConverter
              : colonyObj.frontConverter
          }
          selected={economyActionsLookup[colonyObj.id]?.includes(0)}
          onClick={() => {
            dispatch(
              toggleEconomyAction({
                cardId: colonyObj.id,
                converterIndex: 0,
              })
            );
          }}
        />
      </Stack>
    </CardBase>
  );
}

export default ColonyElement;
