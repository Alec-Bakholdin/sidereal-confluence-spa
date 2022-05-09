import { ReactElement } from "react";
import CardBase from "../CardBase";
import { Colony } from "assets/types/Cards";
import ConverterElement from "../Converter/ConverterElement";
import { Stack } from "@mui/material";

export function ColonyElement({
  colonyObj,
}: {
  colonyObj: Colony;
}): ReactElement {
  return (
    <CardBase title={colonyObj.name}>
      <Stack>
        <ConverterElement
          key={"colony-front-converter"}
          converter={colonyObj.frontConverter}
        />
      </Stack>
    </CardBase>
  );
}

export default ColonyElement;
