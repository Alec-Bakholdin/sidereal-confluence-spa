import { ReactElement } from "react";
import { useAppSelector } from "redux/hooks";
import { Box, Stack, Typography } from "@mui/material";
import "./Lobby.scss";
import RaceSelection from "components/RaceSelection/RaceSelection";

export function Lobby(): ReactElement {
  const { game } = useAppSelector((state) => state.game);

  return (
    <Stack direction={"row"} className={"center-box lobby-stack"}>
      <Box key={"race-selection"} className={"lobby-section"}>
        <RaceSelection />
      </Box>
      <Box key={"player-list"} className={"lobby-section"}>
        {Object.values(game?.players ?? {}).map((player) => (
          <Typography key={player.user.username}>
            {player.user.username}
            {player.race && ": " + player.race.name}
          </Typography>
        ))}
      </Box>
    </Stack>
  );
}

export default Lobby;
