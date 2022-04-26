import { Card, CardContent, Grid, Typography } from "@mui/material";

export const Game = function () {
  return (
    <Grid
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      sx={{}}
    >
      <Card sx={{ width: 400 }}>
        <CardContent>
          <Typography>Name of the Converter</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Game;
