import { ReactElement } from "react";
import { useAppSelector } from "redux/hooks";
import { Grid, Typography } from "@mui/material";
import "./Lobby.scss";
import RaceSelection from "components/RaceSelection/RaceSelection";
import SiderealButton from "components/SiderealButton/SiderealButton";
import { useStompClient } from "react-stomp-hooks";
import { APP_PLAYER_READY } from "socket/SocketTopics";
import { selectSelf } from "redux/reducers/game";
import PlayerReadyDto from "../../../assets/dto/PlayerReadyDto";

export function Lobby(): ReactElement {
  const { game } = useAppSelector((state) => state.game);
  const player = useAppSelector(selectSelf);
  const stompClient = useStompClient();
  const handleReady = () => {
    stompClient?.publish({
      destination: APP_PLAYER_READY,
      body: JSON.stringify({
        ready: !Boolean(player?.ready),
      } as PlayerReadyDto),
    });
  };

  return (
    <Grid container className={"center-box lobby-stack"}>
      <Grid item xs={6} key={"race-selection"} className={"lobby-section"}>
        <RaceSelection />
      </Grid>
      <Grid
        item
        xs={6}
        container
        direction={"column"}
        key={"player-preview"}
        className={"lobby-section"}
      >
        <Grid item xs={10} className={"lobby-section"}>
          {Object.values(game?.players ?? {}).map((player) => (
            <Typography key={player.user.username}>
              {`${player.user.username}: ${player?.ready ? "" : "not "}ready`}
              {player.race && ", " + player.race.name}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={2} container className={"lobby-section center-box"}>
          <SiderealButton
            name={`${player?.ready ? "" : "not "}ready`}
            onClick={handleReady}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Lobby;
