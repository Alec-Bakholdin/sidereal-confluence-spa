import React, { ReactElement, useState } from "react";
import Resources from "assets/types/Resources";
import { Box, Grid } from "@mui/material";
import { Forward } from "@mui/icons-material";
import ResourceIcon from "../ResourceIcon/ResourceIcon";
import "./ConverterElement.scss";
import Converter from "assets/types/Converter";

function renderResources(
  resources: Resources,
  upgrade?: boolean,
  acquisition?: boolean
): ReactElement {
  const { white, brown, green, black, blue, yellow, octagon, points } =
    resources;
  return (
    <>
      {upgrade && <ResourceIcon type={"upgrade"} />}
      {acquisition && <ResourceIcon type={"acquisition"} />}

      {white && <ResourceIcon type={"white"} qty={white} />}
      {brown && <ResourceIcon type={"brown"} qty={brown} />}
      {green && <ResourceIcon type={"green"} qty={green} />}
      {black && <ResourceIcon type={"black"} qty={black} />}
      {blue && <ResourceIcon type={"blue"} qty={blue} />}
      {yellow && <ResourceIcon type={"yellow"} qty={yellow} />}
      {octagon && <ResourceIcon type={"octagon"} qty={octagon} />}
      {points && <ResourceIcon type={"points"} qty={points} />}
    </>
  );
}

export function ConverterElement({
  converter,
  upgrade,
  acquisition,
}: {
  converter: Converter;
  upgrade?: boolean;
  acquisition?: boolean;
}): ReactElement {
  const selectedColor = "white";
  const unselectedColor = "transparent";
  const [borderColor, setBorderColor] = useState<string>(unselectedColor);

  return (
    <Box
      className={"converter"}
      border={1}
      borderColor={borderColor}
      onMouseEnter={() => setBorderColor(selectedColor)}
      onMouseLeave={() => setBorderColor(unselectedColor)}
    >
      <Grid container direction={"row"} className={"center-box"}>
        <Box>{renderResources(converter.input ?? {})}</Box>
        <Box color={converter.phase === "Trade" ? "purple" : "white"}>
          <Forward />
        </Box>
        <Box>
          {renderResources(converter.output ?? {}, upgrade, acquisition)}
        </Box>
      </Grid>
    </Box>
  );
}

export default ConverterElement;
