import { ReactElement } from "react";
import Converter, { getConverters } from "../Converter/Converter";
import { Grid, IconButton, Typography } from "@mui/material";
import { Cached } from "@mui/icons-material";

export function UpgradedConverterCard({
  upgradedName,
  upgradedConverters,
  flipCard,
}: {
  upgradedName: string;
  upgradedConverters: Array<ReactElement<typeof Converter>>;
  flipCard: () => void;
}): ReactElement {
  return (
    <Grid container direction={"column"}>
      <Grid item xs={2}>
        <Typography textAlign={"center"} variant={"h5"}>
          {upgradedName}
        </Typography>
      </Grid>
      <Grid item container xs={8} className={"center-box"}>
        {getConverters(upgradedConverters)}
      </Grid>
      <Grid item container xs={2} className={"center-box"}>
        <IconButton children={<Cached />} onClick={() => flipCard()} />
      </Grid>
    </Grid>
  );
}

export default UpgradedConverterCard;
