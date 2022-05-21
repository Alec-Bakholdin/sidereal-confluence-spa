import { ReactElement } from "react";
import { useAppSelector } from "redux/hooks";
import { Stack, Typography } from "@mui/material";

export function Lobby(): ReactElement {
  const { game } = useAppSelector((state) => state.game);

  return (
    <Stack height={"100%"} className={"center-box"}>
      {game &&
        Object.values(game.players).map((player) => (
          <Typography variant={"h6"}>{player.user.username}</Typography>
        ))}
    </Stack>
  );
}

export default Lobby;
