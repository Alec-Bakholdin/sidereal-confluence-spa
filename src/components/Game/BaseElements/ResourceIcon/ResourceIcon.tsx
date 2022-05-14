import React, { ReactElement } from "react";
import { getResourceSprite, ResourceType } from "assets/types/Resources";
import { Box, Icon, Typography } from "@mui/material";

import "./ResourceIcon.scss";

export function ResourceIcon({
  type,
  qty,
  size = 25,
}: {
  type: ResourceType;
  qty?: number;
  size?: number;
}): ReactElement {
  const color = type === "white" || type === "yellow" ? "black" : "white";

  return (
    <Box
      height={size}
      width={size}
      className={"resource-icon-root"}
      overflow={"hidden"}
    >
      <Icon
        className={"resource-icon-icon"}
        sx={{ fontSize: `${size * 0.9}px !important` }}
      >
        {getResourceSprite(type)}
      </Icon>
      {qty && qty > 1 && (
        <Typography
          component={"span"}
          className={"resource-icon-count"}
          color={color}
          sx={{
            marginTop: `${size * 0.17}px !important`,
            fontSize: `${size * 0.55}px !important`,
          }}
        >
          {qty}
        </Typography>
      )}
    </Box>
  );
}

export default ResourceIcon;
