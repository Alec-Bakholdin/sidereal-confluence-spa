import { MouseEvent, ReactElement, useState } from "react";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useAppSelector } from "redux/hooks";
import { selectGameState } from "redux/reducers/gameState";
import { useStompClient } from "react-stomp-hooks";
import Player, { emptyPlayer } from "assets/types/Player";
import { APP_TRANSFER_CARD } from "assets/types/SocketTopics";
import { Card } from "assets/types/Cards";

export function GiveCardAction({
  card,
  closeModal,
}: {
  card: Card;
  closeModal: () => void;
}): ReactElement {
  // redux

  const { players } = useAppSelector(selectGameState);
  const { playerId } = useAppSelector((state) => state.gameState);

  // socket
  const stompClient = useStompClient();

  // element state
  const [selectedPlayer, setSelectedPlayer] = useState<Player>(emptyPlayer());

  // handlers
  const handleChange = (e: SelectChangeEvent) => {
    setSelectedPlayer(players[e.target.value]);
  };
  const handleGiveCard = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (
      stompClient &&
      card &&
      selectedPlayer.id &&
      selectedPlayer.id !== playerId
    ) {
      stompClient.publish({
        destination: APP_TRANSFER_CARD,
        body: JSON.stringify({
          currentOwnerPlayerId: playerId,
          newOwnerPlayerId: selectedPlayer.id,
          cardId: card.id,
        }),
      });
    }
    closeModal();
  };
  return (
    <Grid direction={"row"} className={"center-box"} container spacing={1}>
      <Grid item>
        <Typography>Give card to </Typography>
      </Grid>
      <Grid item>
        <Select
          value={selectedPlayer.id}
          variant={"standard"}
          onChange={handleChange}
        >
          {Object.values(players)
            .filter((player) => player.id !== playerId)
            .map((player) => (
              <MenuItem value={player.id}>{player.name}</MenuItem>
            ))}
        </Select>
      </Grid>
      <Grid item>
        <Button variant={"outlined"} onClick={handleGiveCard}>
          OK
        </Button>
      </Grid>
    </Grid>
  );
}

export default GiveCardAction;
