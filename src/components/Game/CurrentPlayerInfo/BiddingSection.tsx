import {
  ChangeEvent,
  ReactElement,
  useEffect,
  useState,
  KeyboardEvent,
} from "react";
import { useAppSelector } from "redux/hooks";
import { selectGameState, selectPlayer } from "redux/reducers/gameState";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useStompClient } from "react-stomp-hooks";
import {
  APP_SET_PLAYER_BIDS,
  SetPlayerBidsClientMessage,
} from "assets/types/SocketTopics";
import { Check } from "@mui/icons-material";

export function BiddingSection(): ReactElement {
  const player = useAppSelector(selectPlayer);
  const gameState = useAppSelector(selectGameState);
  const [colonies, setColonies] = useState(0);
  const [researchTeams, setResearchTeams] = useState(0);
  const [nothing, setNothing] = useState(0);
  const [updated, setUpdated] = useState(false);
  const stompClient = useStompClient();

  useEffect(() => {
    console.log("Updating ships");
    const playerShips = player.resources?.ships ?? 0;
    const newColonies = Math.min(playerShips, colonies);
    const newResearchTeams = Math.min(playerShips - newColonies, researchTeams);
    const newNothing = playerShips - newColonies - newResearchTeams;
    setColonies(newColonies);
    setResearchTeams(newResearchTeams);
    setNothing(newNothing);
  }, [colonies, researchTeams, nothing, player.resources?.ships]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    if (name === "colonies") {
      setColonies(parseInt(value));
    } else if (name === "researchTeams") {
      setResearchTeams(parseInt(value));
    } else if (name === "nothing") {
      setNothing(parseInt(value));
    }
    setUpdated(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (stompClient && gameState.phase === "Confluence") {
      stompClient.publish({
        destination: APP_SET_PLAYER_BIDS,
        body: JSON.stringify({
          playerId: player.id,
          colonyBid: colonies,
          researchTeamBid: researchTeams,
        } as SetPlayerBidsClientMessage),
      });
      setUpdated(true);
    }
  };

  return (
    <Grid container spacing={1} sx={{ paddingTop: 5 }}>
      <Grid item xs={6}>
        <Typography variant={"h5"} textAlign={"right"}>
          Colonies
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          name={"colonies"}
          type={"number"}
          value={colonies ?? 0}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant={"h5"} textAlign={"right"}>
          Research Teams
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          name={"researchTeams"}
          type={"number"}
          value={researchTeams ?? 0}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant={"h5"} textAlign={"right"}>
          Nothing
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          name={"nothing"}
          type={"number"}
          value={nothing ?? 0}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </Grid>
      <Grid item xs={6} />
      <Grid item xs={6}>
        <Button
          variant={"outlined"}
          onClick={handleSubmit}
          sx={{ marginRight: 2 }}
        >
          <Typography variant={"h5"}>Submit</Typography>
        </Button>
        {updated && <Check color={"success"} />}
      </Grid>
    </Grid>
  );
}

export default BiddingSection;
