import { ReactElement, useState } from "react";
import { useAppSelector } from "redux/hooks";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import { Alert, Box, Grid } from "@mui/material";
import RacePreviewCard from "./RacePreviewCard";
import "./RaceSelection.scss";
import { useStompClient } from "react-stomp-hooks";
import { APP_CHOOSE_RACE } from "socket/SocketTopics";
import { ChooseRaceDto } from "assets/dto/ChooseRaceDto";
import RaceDto from "assets/dto/RaceDto";

export function RaceSelection(): ReactElement {
  const stompClient = useStompClient();
  const { races, loading } = useAppSelector((state) => state.races);
  const [selectedRace, setSelectedRace] = useState<RaceDto | undefined>();
  const handleClick = (raceDto: RaceDto) => () => {
    setSelectedRace(raceDto);
    stompClient?.publish({
      destination: APP_CHOOSE_RACE,
      body: JSON.stringify({ raceType: raceDto.name } as ChooseRaceDto),
    });
  };

  return (
    <Box className={"race-selection"}>
      {loading ? (
        <LoadingIndicator />
      ) : races ? (
        <Grid container>
          {races.map((r, i) => (
            <Grid key={i} onClick={handleClick(r)} item>
              <RacePreviewCard
                race={r}
                selected={r.name === selectedRace?.name}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Alert severity={"error"}>Something is wrong</Alert>
      )}
    </Box>
  );
}

export default RaceSelection;
