import React, { ReactElement } from "react";
import {
  getResourceSprite,
  ResourceType,
} from "../../../assets/types/Resources";
import { Box, Icon, Typography } from "@mui/material";

import "./ResourceIcon.css";

export function ResourceIcon({
  type,
  qty,
}: {
  type: ResourceType;
  qty?: number;
}): ReactElement {
  const color = type === "white" || type === "yellow" ? "black" : "white";

  return (
    <Box
      width={15}
      height={15}
      className={"resource-icon-root"}
      overflow={"hidden"}
    >
      <Icon className={"resource-icon-icon"}>{getResourceSprite(type)}</Icon>
      {qty && qty > 1 && (
        <Typography
          component={"span"}
          className={"resource-icon-count"}
          color={color}
        >
          {qty}
        </Typography>
      )}
    </Box>
  );
}

export default ResourceIcon;
