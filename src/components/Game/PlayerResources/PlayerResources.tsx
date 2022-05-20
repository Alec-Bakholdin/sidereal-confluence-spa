import React, { ReactElement } from "react";
import Resources from "assets/types/Resources";
import ResourceIcon from "../../BaseElements/ResourceIcon/ResourceIcon";
import { Box } from "@mui/material";

export function PlayerResources({
  resources,
  donations,
}: {
  resources?: Resources;
  donations?: boolean;
}): ReactElement {
  if (!resources) {
    return <></>;
  }
  return (
    <Box width={"100%"}>
      <ResourceIcon donation={donations} type={"white"} />
      {resources.white ?? 0}
      <ResourceIcon donation={donations} type={"brown"} />
      {resources.brown ?? 0}
      <ResourceIcon donation={donations} type={"green"} />
      {resources.green ?? 0}
      <ResourceIcon donation={donations} type={"black"} />
      {resources.black ?? 0}
      <ResourceIcon donation={donations} type={"blue"} />
      {resources.blue ?? 0}
      <ResourceIcon donation={donations} type={"yellow"} />
      {resources.yellow ?? 0}
      <ResourceIcon donation={donations} type={"octagon"} />
      {resources.octagon ?? 0}
      <ResourceIcon donation={donations} type={"points"} />
      {resources.points ?? 0}
      <ResourceIcon donation={donations} type={"ships"} />
      {resources.ships ?? 0}
    </Box>
  );
}

export default PlayerResources;
