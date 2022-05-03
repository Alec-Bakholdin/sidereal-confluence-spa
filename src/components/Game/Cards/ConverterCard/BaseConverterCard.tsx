import { ReactElement } from "react";
import Converter, { getConverter, getConverters } from "../Converter/Converter";
import { Grid, IconButton, Typography } from "@mui/material";
import { Cached } from "@mui/icons-material";

export function BaseConverterCard({
  name,
  baseConverters,
  acquisitionConverters,
  upgradeOptions,
  flipCard,
}: {
  name: string;
  baseConverters: Array<ReactElement<typeof Converter>>;
  acquisitionConverters?: Array<ReactElement<typeof Converter>>;
  upgradeOptions: Array<ReactElement<typeof Converter>>;
  flipCard: () => void;
}): ReactElement {
  return (
    <Grid container direction={"column"}>
      <Grid item container direction={"row"} xs={2}>
        <Grid item xs={4} children={getConverter(0, acquisitionConverters)} />
        <Grid
          item
          container
          className={"center-box"}
          direction={"column"}
          xs={4}
        >
          <Typography textAlign={"center"} variant={"h5"} children={name} />
        </Grid>
        <Grid item xs={4} children={getConverter(1, acquisitionConverters)} />
      </Grid>
      <Grid item container xs={8} className={"center-box"}>
        {getConverters(baseConverters)}
      </Grid>
      <Grid item container xs={2} className={"center-box"}>
        <Grid item xs={4} children={getConverter(0, upgradeOptions)} />
        <Grid item xs={4} className={"center-box"}>
          <IconButton children={<Cached />} onClick={() => flipCard()} />
        </Grid>
        <Grid item xs={4} children={getConverter(1, upgradeOptions)} />
      </Grid>
    </Grid>
  );
}

export default BaseConverterCard;
