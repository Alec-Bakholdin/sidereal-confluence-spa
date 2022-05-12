import { ReactElement, useState, MouseEvent } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  closeCardActionsModal,
  selectCardActionsModal,
} from "redux/reducers/modals";
import { selectCard } from "redux/reducers/cards";
import { selectGameState } from "redux/reducers/gameState";
import Player, { emptyPlayer } from "assets/types/Player";
import { useStompClient } from "react-stomp-hooks";
import { APP_TRANSFER_CARD } from "assets/types/SocketTopics";

export function CardActionModal(): ReactElement {
  // redux
  const { cardId, show } = useAppSelector(selectCardActionsModal);
  const card = useAppSelector(selectCard(cardId));
  const { players } = useAppSelector(selectGameState);
  const { playerId } = useAppSelector((state) => state.gameState);
  const dispatch = useAppDispatch();

  // socket
  const stompClient = useStompClient();

  // element state
  const [selectedPlayer, setSelectedPlayer] = useState<Player>(emptyPlayer());

  // handlers
  const handleChange = (e: SelectChangeEvent) => {
    setSelectedPlayer(players[e.target.value]);
  };
  const handleClose = () => {
    dispatch(closeCardActionsModal());
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
    handleClose();
  };

  return (
    <Modal open={show} onClose={handleClose}>
      <Box className={"modal"} bgcolor={"background.default"}>
        {card && (
          <>
            <Typography variant={"h4"}>{card.name}</Typography>
            <Grid
              direction={"row"}
              className={"center-box"}
              container
              spacing={1}
            >
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
          </>
        )}
      </Box>
    </Modal>
  );
}

export default CardActionModal;
