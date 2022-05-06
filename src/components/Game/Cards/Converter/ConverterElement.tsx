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
  acquisition?: boolean,
  includeSlashes?: boolean
): ReactElement {
  const { white, brown, green, black, blue, yellow, octagon, points } =
    resources;
  const resourceIcons = [
    upgrade && <ResourceIcon type={"upgrade"} />,
    acquisition && <ResourceIcon type={"acquisition"} />,
    white && <ResourceIcon type={"white"} qty={white} />,
    brown && <ResourceIcon type={"brown"} qty={brown} />,
    green && <ResourceIcon type={"green"} qty={green} />,
    black && <ResourceIcon type={"black"} qty={black} />,
    blue && <ResourceIcon type={"blue"} qty={blue} />,
    yellow && <ResourceIcon type={"yellow"} qty={yellow} />,
    octagon && <ResourceIcon type={"octagon"} qty={octagon} />,
    points && <ResourceIcon type={"points"} qty={points} />,
  ]
    .filter((icon) => icon)
    .map((icon, i) => (
      <>
        {icon}
        {includeSlashes && i < Object.keys(resources).length - 1 && (
          <span>/</span>
        )}
      </>
    ));
  return <>{resourceIcons}</>;
}

export function ConverterElement({
  converter,
  upgrade,
  acquisition,
  includeSlashes,
  onClick,
}: {
  converter: Converter;
  upgrade?: boolean;
  acquisition?: boolean;
  includeSlashes?: boolean;
  onClick?: () => void;
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
      onClick={onClick}
    >
      <Grid container direction={"row"} className={"center-box"}>
        <Box>
          {renderResources(converter.input ?? {}, false, false, includeSlashes)}
        </Box>
        <Box color={converter.phase === "Trade" ? "purple" : "white"}>
          <Forward />
        </Box>
        <Box>
          {renderResources(
            converter.output ?? {},
            upgrade,
            acquisition,
            includeSlashes
          )}
        </Box>
      </Grid>
    </Box>
  );
}

export default ConverterElement;
