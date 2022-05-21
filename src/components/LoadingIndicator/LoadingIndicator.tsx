import React, { ReactElement } from "react";
import { Box, CircularProgress } from "@mui/material";

export function LoadingIndicator(): ReactElement {
  return (
    <Box height={"100%"} className={"center-box"}>
      <CircularProgress />
    </Box>
  );
}

export default LoadingIndicator;
