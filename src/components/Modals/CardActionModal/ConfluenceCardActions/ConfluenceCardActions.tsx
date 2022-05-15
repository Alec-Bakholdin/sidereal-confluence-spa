import { ReactElement } from "react";
import { Card } from "assets/types/Cards";
import { Button, Stack, Typography } from "@mui/material";
import { useStompClient } from "react-stomp-hooks";
import {
  AcquireConfluenceCardClientMessage,
  APP_ACQUIRE_CONFLUENCE_CARD,
} from "assets/types/SocketTopics";
import { useAppSelector } from "redux/hooks";
import { selectPlayerId } from "redux/reducers/gameState";

export function ConfluenceCardActions({
  card,
  handleClose,
}: {
  card: Card;
  handleClose: () => void;
}): ReactElement {
  const playerId = useAppSelector(selectPlayerId);
  const stompClient = useStompClient();
  const handleClick = () => {
    if (stompClient) {
      stompClient.publish({
        destination: APP_ACQUIRE_CONFLUENCE_CARD,
        body: JSON.stringify({
          playerId,
          cardId: card.id,
        } as AcquireConfluenceCardClientMessage),
      });
      handleClose();
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant={"h4"}>{card.name}</Typography>
      <Stack spacing={1} direction={"row"} className={"center-box"}>
        <Typography>Acquire card for ships</Typography>
        <Button variant={"outlined"} onClick={handleClick}>
          OK
        </Button>
      </Stack>
    </Stack>
  );
}

export default ConfluenceCardActions;
