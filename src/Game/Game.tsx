import { Card, CardContent, Grid, Typography } from "@mui/material";
import {ReactElement} from "react";
import Converter from "./Converter";

export const Game = function (): ReactElement {
  return (
    <Grid
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      sx={{}}
    >
      <Card sx={{ width: 400 }}>
        <CardContent>
          <Typography>Name of the Converter Card</Typography>
          <Converter input={{green: 1, brown: 1}} output={{points: 1}} gamePhase={'confluence'}/>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Game;
