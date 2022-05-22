import { ReactElement } from "react";
import GameDto from "assets/dto/GameDto";
import { Grid } from "@mui/material";
import "./InProgressGame.scss";
import Players from "components/Players/Players";

export function InProgressGame({ game }: { game: GameDto }): ReactElement {
  return (
    <Grid
      container
      direction={"column"}
      wrap={"nowrap"}
      className={"in-progress-game-container"}
    >
      <Grid item xs={5} className={"in-progress-game-section"}>
        <Players />
      </Grid>
      <Grid item xs={1} className={"in-progress-game-section"} />
      <Grid item xs={6} container className={"in-progress-game-section"}>
        <Grid item xs={6} className={"in-progress-game-section"} />
        <Grid item xs={6} className={"in-progress-game-section"} />
      </Grid>
    </Grid>
  );
}

export default InProgressGame;
