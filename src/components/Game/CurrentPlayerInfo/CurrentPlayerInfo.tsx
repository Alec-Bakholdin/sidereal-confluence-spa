import { ReactElement } from "react";
import { useAppSelector } from "redux/hooks";
import { Grid } from "@mui/material";
import CardList from "../Cards/CardList/CardList";

export function CurrentPlayerInfo(): ReactElement {
  const { playerId, gameState } = useAppSelector((state) => state.gameState);
  const player = playerId ? gameState.players[playerId] : null;
  if (!player) return <></>;

  return (
    <Grid container direction={"row"} height={"100%"}>
      <Grid item xs={6} border={"1px solid white"}>
        <CardList ids={player.cards} />
      </Grid>
      <Grid item xs={6} border={"1px solid white"}></Grid>
    </Grid>
  );
}

export default CurrentPlayerInfo;
