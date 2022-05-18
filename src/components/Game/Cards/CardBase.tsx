import { Box, Stack, Typography } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import cardBackground from "assets/images/card-background.jpg";
import "./CardBase.scss";
import { Circle } from "@mui/icons-material";

export function CardBase({
  title,
  era,
  children,
  blank,
  doubledWithCaylion,
}: {
  title?: string;
  era?: number;
  blank?: boolean;
  children?: ReactNode;
  doubledWithCaylion?: boolean;
}): ReactElement {
  return (
    <Box
      className={"card-base"}
      sx={{
        backgroundImage: blank ? "" : `url(${cardBackground})`,
      }}
    >
      <Stack direction={"row"} className={"center-box"}>
        {title && (
          <Typography variant={"h5"} textAlign={"center"}>
            {title}
            {era && ` (${era})`}
          </Typography>
        )}
        {doubledWithCaylion && <Circle color={"success"} />}
      </Stack>
      <Box className={"center-box"}>{children}</Box>
    </Box>
  );
}
//TODO: fade when card is available next trade phase using filter: grayscale(100%);

export default CardBase;
