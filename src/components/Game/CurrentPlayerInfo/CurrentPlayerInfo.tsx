import { ReactElement } from "react";
import { useAppSelector } from "redux/hooks";
import { Box, Grid, Paper, Typography } from "@mui/material";
import CardList from "../Cards/CardList/CardList";

export function CurrentPlayerInfo(): ReactElement {
  const { playerId, gameState } = useAppSelector((state) => state.gameState);
  const player = playerId ? gameState.players[playerId] : null;
  if (!player) return <></>;
  const { confluenceList, turn, phase } = gameState;

  return (
    <Grid container direction={"row"}>
      <Grid item xs={6} border={"1px solid white"}>
        <CardList ids={player.cards} />
      </Grid>
      <Grid item xs={6} border={"1px solid white"} paddingLeft={"15px"}>
        <Paper sx={{ overflow: "auto", maxHeight: "450px" }}>
          <Typography variant={"h6"}>Turn: {turn}</Typography>
          <Typography variant={"h6"}>Phase: {phase}</Typography>
          <Typography variant={"h6"}>Confluence List</Typography>
          <Box paddingLeft={"20px"}>
            {confluenceList?.map((confluence) => (
              <Typography
                variant={"body1"}
                color={confluence.turn === turn ? "secondary" : "primary"}
              >
                Turn: {confluence.turn}, Sharing bonus:{" "}
                {confluence.sharingBonus}, Yengii Sharing Bonus:{" "}
                {confluence.yengiiSharingBonus},
              </Typography>
            ))}
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
      </Grid>
    </Grid>
  );
}

export default CurrentPlayerInfo;
