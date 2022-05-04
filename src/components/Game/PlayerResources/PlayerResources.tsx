import React, { ReactElement } from "react";
import Resources from "assets/types/Resources";
import ResourceIcon from "../Cards/ResourceIcon/ResourceIcon";

export function PlayerResources({
  resources,
}: {
  resources?: Resources;
}): ReactElement {
  if (!resources) {
    return <></>;
  }
  return (
    <>
      <ResourceIcon type={"white"} qty={0} />
      {resources.white}
      <ResourceIcon type={"brown"} qty={0} />
      {resources.brown}
      <ResourceIcon type={"green"} qty={0} />
      {resources.green}
      <ResourceIcon type={"black"} qty={0} />
      {resources.black}
      <ResourceIcon type={"blue"} qty={0} />
      {resources.blue}
      <ResourceIcon type={"yellow"} qty={0} />
      {resources.yellow}
      <ResourceIcon type={"octagon"} qty={0} />
      {resources.octagon}
      <ResourceIcon type={"points"} qty={0} />
      {resources.points}
    </>
  );
}

export default PlayerResources;
