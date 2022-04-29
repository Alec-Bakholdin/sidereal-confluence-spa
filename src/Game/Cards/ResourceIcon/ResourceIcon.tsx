import React, { ReactElement } from "react";
import {
  getResourceSprite,
  ResourceType,
} from "../../../assets/types/Resources";
import { Box, Icon, Typography } from "@mui/material";

import "./ResourceIcon.scss";

export function ResourceIcon({
  type,
  qty,
}: {
  type: ResourceType;
  qty?: number;
}): ReactElement {
  const color = type === "white" || type === "yellow" ? "black" : "white";
  const boxSize = 27;

  return (
    <Box
      height={boxSize}
      width={boxSize}
      className={"resource-icon-root"}
      overflow={"hidden"}
    >
      <Icon
        className={"resource-icon-icon"}
        sx={{ fontSize: `${boxSize * 0.9}px !important` }}
      >
        {getResourceSprite(type)}
      </Icon>
      {qty && qty > 1 && (
        <Typography
          component={"span"}
          className={"resource-icon-count"}
          color={color}
          sx={{
            marginTop: `${boxSize * 0.19}px !important`,
            fontSize: `${boxSize * 0.8}px !important`,
          }}
        >
          {qty}
        </Typography>
      )}
    </Box>
  );
}

export default ResourceIcon;
