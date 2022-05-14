import { ReactElement } from "react";
import { Paper, Typography } from "@mui/material";
import { useAppSelector } from "redux/hooks";

export function ConfluenceInformation(): ReactElement {
  const { playerId, gameState } = useAppSelector((state) => state.gameState);
  const player = playerId ? gameState.players[playerId] : null;
  if (!player) return <></>;
  const { confluenceList, turn, pendingResearches } = gameState;

  return (
    <Paper sx={{ overflow: "auto", maxHeight: "450px" }}>
      <Typography variant={"h6"}>Confluence List</Typography>
      {confluenceList?.map((confluence) => (
        <Typography
          variant={"body1"}
          color={confluence.turn === turn ? "secondary" : "primary"}
        >
          Turn: {confluence.turn}, Sharing bonus: {confluence.sharingBonus},
          Yengii Sharing Bonus: {confluence.yengiiSharingBonus},
        </Typography>
      ))}
      <Typography variant={"h6"}>Pending Researches</Typography>
      {pendingResearches.map((research) => (
        <Typography variant={"body1"} color={"primary"}>
          {research}
        </Typography>
      ))}
    </Paper>
  );
}

export default ConfluenceInformation;
