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
          <Typography variant={"h5"} textAlign={"center"}>
            Converter Card
          </Typography>
          <Grid container alignItems={"center"} justifyContent={"center"}>
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
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Game;
