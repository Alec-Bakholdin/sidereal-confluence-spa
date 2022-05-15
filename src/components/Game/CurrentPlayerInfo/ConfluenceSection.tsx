import { ReactElement, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CardList from "../Cards/CardList/CardList";
import ConfluenceInformation from "./ConfluenceInformation";
import { useAppSelector } from "redux/hooks";
import BiddingSection from "./BiddingSection";

export function ConfluenceSection(): ReactElement {
  const selectionOptions = [
    "Colonies",
    "Research Teams",
    "Confluence List",
    "Bidding",
  ];
  const [selected, setSelected] = useState<string>(selectionOptions[0]);
  const { gameState } = useAppSelector((state) => state.gameState);

  return (
    <>
      <Grid container direction={"row"}>
        {selectionOptions.map((tabName) => (
          <Grid item xs={3} key={tabName}>
            <Box
              border={"1px solid white"}
              borderBottom={selected === tabName ? "0px solid white" : ""}
              padding={"5px"}
              onClick={() => setSelected(tabName)}
              bgcolor={
                selected !== tabName ? "background.paper" : "background.default"
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
      ) : selected === selectionOptions[2] ? (
        <ConfluenceInformation />
      ) : (
        <BiddingSection />
      )}
    </>
  );
}

export default ConfluenceSection;
