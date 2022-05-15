import { ReactElement } from "react";
import { Grid } from "@mui/material";
import { useAppSelector } from "redux/hooks";
import Player from "assets/types/Player";
import PlayerPreview from "./PlayerPreview";

export function Players({
  maxPerRow = 5,
}: {
  maxPerRow?: number;
}): ReactElement {
  const { gameState, playerId } = useAppSelector((state) => state.gameState);
  const playerArr = Object.values(gameState.players);

  return (
    <Grid container height={"100%"} direction={"row"} display={"flex"}>
      {playerArr
        .filter((player) => player.id !== playerId)
        .map((player: Player) => (
          <Grid
            className={"player-preview-grid-item"}
            item
            width={`${100 / maxPerRow}%`}
            padding={"10px"}
            key={player.id}
          >
            <PlayerPreview player={player} key={player.id} />
          </Grid>
        ))}
    </Grid>
  );
}

export default Players;
