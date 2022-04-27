import React, { ReactElement } from "react";
import { getResourceSprite, ResourceType } from "../assets/types/Resources";
import { Icon, Typography } from "@mui/material";

import "./ResourceIcon.css";

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
    <div className={"resource-icon-root"}>
      <Icon fontSize={"large"} className={"resource-icon-icon"}>
        {getResourceSprite(type)}
      </Icon>
      <Typography component={"span"} className={"resource-icon-count"}>
        {qty}
      </Typography>
    </div>
  );
}

export default ResourceIcon;
