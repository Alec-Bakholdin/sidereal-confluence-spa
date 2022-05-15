import { ReactElement } from "react";
import { useAppSelector } from "redux/hooks";
import { Grid } from "@mui/material";
import CardList from "../Cards/CardList/CardList";
import ConfluenceSection from "./ConfluenceSection";

export function CurrentPlayerInfo(): ReactElement {
  const { playerId, gameState } = useAppSelector((state) => state.gameState);
  const player = playerId ? gameState.players[playerId] : null;
  if (!player) return <></>;

  return (
    <Grid container direction={"row"} height={"450px"}>
      <Grid item xs={6} border={"1px solid white"} height={"450px"}>
        <CardList ids={player.cards} currentPlayerCards />
      </Grid>
      <Grid item xs={6} border={"1px solid white"} height={"450px"}>
        <ConfluenceSection />
      </Grid>
    </Grid>
  );
}

export default CurrentPlayerInfo;
