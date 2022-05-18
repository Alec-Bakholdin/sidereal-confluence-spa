import { ReactElement, useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import CardList from "../Cards/CardList/CardList";
import ConfluenceInformation from "./ConfluenceInformation";
import { useAppSelector } from "redux/hooks";
import BiddingSection from "./BiddingSection";
import { selectBids } from "redux/reducers/bidding";
import { selectPlayerId } from "redux/reducers/gameState";
import { useStompClient } from "react-stomp-hooks";
import { APP_SKIP_BID } from "assets/types/SocketTopics";

export function ConfluenceSection(): ReactElement {
  const selectionOptions = [
    "Colonies",
    "Research Teams",
    "Confluence List",
    "Bidding",
  ];
  const [selected, setSelected] = useState<string>(selectionOptions[0]);
  const { gameState } = useAppSelector((state) => state.gameState);
  const bids = useAppSelector(selectBids);
  const playerId = useAppSelector(selectPlayerId);
  const stompClient = useStompClient();
  const isActiveColonyBidder =
    gameState.activeBidTrack === "Colony" &&
    gameState.activeBidder === playerId;
  const isActiveResearchBidder =
    gameState.activeBidTrack === "ResearchTeam" &&
    gameState.activeBidder === playerId;

  const skipBid = () => {
    if (stompClient) {
      stompClient.publish({
        destination: APP_SKIP_BID,
      });
    }
  };

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
        <>
          {isActiveColonyBidder && (
            <Button onClick={skipBid} variant={"outlined"}>
              SKIP
            </Button>
          )}
          <CardList
            ids={gameState.availableColonies}
            shipMinima={gameState.colonyBidTrack}
            colonyBidTrack
          />
        </>
      ) : selected === selectionOptions[1] ? (
        <>
          {isActiveResearchBidder && (
            <Button onClick={skipBid} variant={"outlined"}>
              SKIP
            </Button>
          )}
          <CardList
            ids={gameState.availableResearchTeams}
            shipMinima={gameState.researchTeamBidTrack}
            researchTeamBidTrack
          />
        </>
      ) : selected === selectionOptions[2] ? (
        <ConfluenceInformation />
      ) : (
        <>
          {!gameState.activeBidder ? (
            <BiddingSection />
          ) : (
            <Grid container>
              <Grid item xs={6}>
                <Stack>
                  <Typography variant={"h5"}>Colonies</Typography>
                  {bids
                    .filter((bid) => bid.colonyBid > 0)
                    .sort((a, b) => b.colonyBid - a.colonyBid)
                    .map((bid) => (
                      <Box
                        key={bid.playerId}
                        border={
                          gameState.activeBidTrack === "Colony" &&
                          gameState.activeBidder === bid.playerId
                            ? "1px solid green"
                            : ""
                        }
                      >
                        <Typography variant={"h6"}>
                          {gameState.players[bid.playerId]?.name}{" "}
                          {bid.colonyBid}
                        </Typography>
                      </Box>
                    ))}
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack>
                  <Typography variant={"h5"}>Research Teams</Typography>
                  {bids
                    .filter((bid) => bid.researchTeamBid > 0)
                    .sort((a, b) => b.researchTeamBid - a.researchTeamBid)
                    .map((bid) => (
                      <Box
                        key={bid.playerId}
                        border={
                          gameState.activeBidTrack === "ResearchTeam" &&
                          gameState.activeBidder === bid.playerId
                            ? "1px solid green"
                            : ""
                        }
                      >
                        <Typography variant={"h6"}>
                          {gameState.players[bid.playerId]?.name}{" "}
                          {bid.researchTeamBid}
                        </Typography>
                      </Box>
                    ))}
                </Stack>
              </Grid>
            </Grid>
          )}
        </>
      )}
    </>
  );
}

export default ConfluenceSection;
