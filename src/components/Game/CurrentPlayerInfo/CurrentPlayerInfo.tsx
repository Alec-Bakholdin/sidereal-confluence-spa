import { ReactElement, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { Box, Grid, Typography } from "@mui/material";
import CardList from "../Cards/CardList/CardList";
import ConfluenceInformation from "./ConfluenceInformation";

export function CurrentPlayerInfo(): ReactElement {
  const selectionOptions = ["Colonies", "Research Teams", "Confluence List"];
  const [selected, setSelected] = useState<string>(selectionOptions[0]);
  const { playerId, gameState } = useAppSelector((state) => state.gameState);
  const player = playerId ? gameState.players[playerId] : null;
  if (!player) return <></>;

  return (
    <Grid container direction={"row"}>
      <Grid item xs={6} border={"1px solid white"}>
        <CardList ids={player.cards} currentPlayerCards />
      </Grid>
      <Grid item xs={6} border={"1px solid white"}>
        <Grid container direction={"row"}>
          {selectionOptions.map((tabName) => (
            <Grid item xs={4} key={tabName}>
              <Box
                border={"1px solid white"}
                borderBottom={selected === tabName ? "0px solid white" : ""}
                padding={"5px"}
                onClick={() => setSelected(tabName)}
                bgcolor={
                  selected !== tabName
                    ? "background.paper"
                    : "background.default"
                }
                sx={{ cursor: "pointer" }}
              >
                <Typography variant={"h5"} textAlign={"center"}>
                  {tabName}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {selected === selectionOptions[0] ? (
          <CardList
            ids={gameState.availableColonies}
            shipMinima={gameState.colonyBidTrack}
          />
        ) : selected === selectionOptions[1] ? (
          <CardList
            ids={gameState.availableResearchTeams}
            shipMinima={gameState.researchTeamBidTrack}
          />
        ) : (
          <ConfluenceInformation />
        )}
      </Grid>
    </Grid>
  );
}

export default CurrentPlayerInfo;
