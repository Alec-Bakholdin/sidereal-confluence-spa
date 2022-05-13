import React, { ReactElement } from "react";
import Resources from "assets/types/Resources";
import ResourceIcon from "../Cards/ResourceIcon/ResourceIcon";
import { Box } from "@mui/material";

export function PlayerResources({
  resources,
}: {
  resources?: Resources;
}): ReactElement {
  if (!resources) {
    return <></>;
  }
  return (
    <Box width={"100%"}>
      <ResourceIcon type={"white"} />
      {resources.white ?? 0}
      <ResourceIcon type={"brown"} />
      {resources.brown ?? 0}
      <ResourceIcon type={"green"} />
      {resources.green ?? 0}
      <ResourceIcon type={"black"} />
      {resources.black ?? 0}
      <ResourceIcon type={"blue"} />
      {resources.blue ?? 0}
      <ResourceIcon type={"yellow"} />
      {resources.yellow ?? 0}
      <ResourceIcon type={"octagon"} />
      {resources.octagon ?? 0}
      <ResourceIcon type={"points"} />
      {resources.points ?? 0}
      <ResourceIcon type={"ships"} />
      {resources.ships ?? 0}
    </Box>
  );
}

export default PlayerResources;
