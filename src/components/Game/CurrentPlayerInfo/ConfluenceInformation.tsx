import { ReactElement } from "react";
import { Box, Paper, Typography } from "@mui/material";
import CardList from "../Cards/CardList/CardList";
import { useAppSelector } from "redux/hooks";

export function ConfluenceInformation(): ReactElement {
  const { playerId, gameState } = useAppSelector((state) => state.gameState);
  const player = playerId ? gameState.players[playerId] : null;
  if (!player) return <></>;
  const { confluenceList, turn } = gameState;

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
      <Box>
        {gameState.availableColonies.length > 0 && (
          <>
            Colonies
            <CardList
              ids={gameState.availableColonies}
              shipMinima={gameState.colonyBidTrack}
            />
          </>
        )}
        {gameState.availableResearchTeams.length > 0 && (
          <>
            Research Teams
            <CardList
              ids={gameState.availableResearchTeams}
              shipMinima={gameState.researchTeamBidTrack}
            />
          </>
        )}
      </Box>
    </Paper>
  );
}

export default ConfluenceInformation;
