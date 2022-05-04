import { ReactElement, useEffect } from "react";
import { Grid } from "@mui/material";
import { fetchCards } from "redux/reducers/cards";
import { useAppDispatch } from "redux/hooks";

import "./Game.scss";

export const Game = function (): ReactElement {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCards());
  });

  return (
    <Grid container direction={"row"} sx={{ height: "100vh" }}>
      <Grid item container xs={3} direction={"column"}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Grid item container xs={6}></Grid>
      <Grid item container xs={3}></Grid>
    </Grid>
  );
};

export default Game;
