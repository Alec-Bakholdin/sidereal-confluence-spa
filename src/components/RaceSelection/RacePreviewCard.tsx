import { ReactElement } from "react";
import RaceDto from "assets/dto/RaceDto";
import { Box, Typography } from "@mui/material";

export function RacePreviewCard({
  race,
  selected,
}: {
  race: RaceDto;
  selected: boolean;
}): ReactElement {
  return (
    <Box
      className={
        "center-box race-preview-card" +
        (selected ? " selected-preview-card" : "")
      }
    >
      <Typography variant={"h4"}>{race.name}</Typography>
    </Box>
  );
}

export default RacePreviewCard;
