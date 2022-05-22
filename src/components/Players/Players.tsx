import { ReactElement } from "react";
import { Box, Paper, Stack } from "@mui/material";
import PlayerPreview from "./PlayerPreview";
import { useAppSelector } from "../../redux/hooks";
import { selectGame } from "../../redux/reducers/game";
import PlayerDto from "../../assets/dto/PlayerDto";

export function Players(): ReactElement {
  const game = useAppSelector(selectGame);
  const playerArr = Object.values(game?.players ?? {}) as PlayerDto[];

  return (
    <Paper sx={{ minHeight: "100%", maxWidth: "100vw", overflow: "auto" }}>
      <Stack direction={"row"} spacing={2}>
        {playerArr.map((player: PlayerDto) => (
          <Box minWidth={"20%"} key={player.user.username}>
            <PlayerPreview player={player} />
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}

export default Players;
