import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ReactElement } from "react";
import Converter from "./Cards/Converter";

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
          <Converter
            input={{
              green: 10,
              brown: 10,
              white: 10,
            }}
            output={{
              green: 10,
              octagon: 10,
              points: 10,
            }}
            gamePhase={"confluence"}
          />
          <Converter
            input={{ green: 3, brown: 33, yellow: 3 }}
            output={{ points: 5 }}
            gamePhase={"econ"}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Game;
