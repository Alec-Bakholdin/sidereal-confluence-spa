import { ReactElement } from "react";
import { useAppSelector } from "redux/hooks";
import { selectPlayer } from "redux/reducers/gameState";
import { Grid, Stack, TextField, Typography } from "@mui/material";

export function BiddingSection(): ReactElement {
  const player = useAppSelector(selectPlayer);

  return (
    <Stack className={"center-box"} spacing={2} sx={{ paddingTop: 5 }}>
      <Stack direction={"row"} className={"center-box"} spacing={1}>
        <Typography variant={"h5"}>Colonies</Typography>
        <TextField />
      </Stack>
      <Stack direction={"row"} className={"center-box"} spacing={1}>
        <Typography variant={"h5"}>Research Teams</Typography>
        <TextField />
      </Stack>
      <Stack direction={"row"} className={"center-box"} spacing={1}>
        <Typography variant={"h5"}>Nothing</Typography>
        <TextField />
      </Stack>
    </Stack>
  );
}

export default BiddingSection;
