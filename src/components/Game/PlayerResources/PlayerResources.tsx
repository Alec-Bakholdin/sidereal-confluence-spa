import React, { ReactElement } from "react";
import Resources from "assets/types/Resources";
import ResourceIcon from "../Cards/ResourceIcon/ResourceIcon";
import { Grid, Stack, Typography } from "@mui/material";

export function PlayerResources({
  resources,
}: {
  resources?: Resources;
}): ReactElement {
  if (!resources) {
    return <></>;
  }
  return (
    <Typography variant={"h6"} sx={{ width: "100%" }}>
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
    </Typography>
  );
}

export default PlayerResources;
