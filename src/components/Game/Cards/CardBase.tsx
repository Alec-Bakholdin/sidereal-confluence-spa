import { Box, Typography } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import cardBackground from "assets/images/card-background.jpg";
import "./CardBase.scss";

export function CardBase({
  title,
  children,
}: {
  title?: string;
  children?: ReactNode;
}): ReactElement {
  return (
    <Box
      className={"card-base"}
      sx={{
        backgroundImage: `url(${cardBackground})`,
      }}
    >
      {title && (
        <Typography variant={"h5"} textAlign={"center"}>
          {title}
        </Typography>
      )}
      <Box className={"center-box"}>{children}</Box>
    </Box>
  );
}

export default CardBase;
