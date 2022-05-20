import { ReactElement } from "react";
import CardBase from "../CardBase";
import { Colony } from "assets/types/Cards";
import ConverterElement from "../../BaseElements/Converter/ConverterElement";
import { Stack } from "@mui/material";

export function ColonyElement({
  colonyObj,
}: {
  colonyObj: Colony;
}): ReactElement {
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
          selected={true}
          onClick={() => {}}
        />
      </Stack>
    </CardBase>
  );
}

export default ColonyElement;
