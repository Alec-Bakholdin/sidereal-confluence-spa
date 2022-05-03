import React, { ReactElement, useState } from "react";
import Resources from "assets/types/Resources";
import GamePhase from "assets/types/GamePhase";
import { Box, Grid } from "@mui/material";
import { Forward } from "@mui/icons-material";
import ResourceIcon from "../ResourceIcon/ResourceIcon";
import "./Converter.css";

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

export function Converter({
  input,
  output,
  gamePhase,
  acquisition,
  upgrade,
}: {
  input: Resources;
  output: Resources;
  gamePhase: GamePhase;
  acquisition?: boolean;
  upgrade?: boolean;
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
      sx={{
        paddingTop: 1,
        paddingLeft: 1,
        paddingRight: 1,

        borderRadius: 1,
        height: "100%",
        display: "inline-block",
      }}
    >
      <Grid container direction={"row"} className={"center-box"}>
        <Box>{renderResources(input)}</Box>
        <Box color={gamePhase === "trade" ? "purple" : "white"}>
          <Forward />
        </Box>
        <Box>{renderResources(output, upgrade, acquisition)}</Box>
      </Grid>
    </Box>
  );
}

export const getConverter = function (
  index: number,
  converters?: Array<ReactElement<typeof Converter>>
): ReactElement {
  if (!converters || index >= converters.length) {
    return <></>;
  }
  return converters[index] ? converters[index] : <></>;
};
export const getConverters = function (
  converters?: Array<ReactElement<typeof Converter>>
): Array<ReactElement> {
  if (!converters) {
    return [];
  }
  return converters.map((converter, index) => {
    return (
      <Grid item key={index}>
        {converter}
      </Grid>
    );
  });
};

export default Converter;
