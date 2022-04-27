import React, { ReactElement } from "react";
import { getResourceSprite, ResourceType } from "../assets/types/Resources";
import { Icon } from "@mui/material";

export function ResourceIcon({
  type,
  qty,
}: {
  type: ResourceType;
  qty?: number;
}): ReactElement {
  if (!qty) {
    return <></>;
  }
  return (
    <div>
      <Icon fontSize={"large"}>{getResourceSprite(type)}</Icon>
    </div>
  );
}

export default ResourceIcon;
