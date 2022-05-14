import { ReactElement } from "react";
import { Button, Stack, Typography } from "@mui/material";
import ConverterElement from "../../Game/BaseElements/Converter/ConverterElement";
import { Colony } from "../../../assets/types/Cards";
import { useStompClient } from "react-stomp-hooks";
import {
  APP_UPGRADE_COLONY,
  UpgradeColonyClientMessage,
} from "../../../assets/types/SocketTopics";
import { useAppSelector } from "../../../redux/hooks";

export function ColonyUpgradeAction({
  colony,
  closeModal,
}: {
  colony: Colony;
  closeModal: () => void;
}): ReactElement {
  const { playerId } = useAppSelector((state) => state.gameState);
  const stompClient = useStompClient();

  const handleClick = () => {
    if (stompClient) {
      stompClient.publish({
        destination: APP_UPGRADE_COLONY,
        body: JSON.stringify({
          playerId,
          cardId: colony.id,
        } as UpgradeColonyClientMessage),
      });
      closeModal();
    }
  };

  return (
    <Stack className={"center-box"} direction={"row"} spacing={1}>
      <Typography>Upgrade using</Typography>
      <ConverterElement converter={colony.upgradeConverter} upgrade />
      <Typography>to get</Typography>
      <ConverterElement converter={colony.backConverter} />
      <Button variant={"outlined"} onClick={handleClick}>
        OK
      </Button>
    </Stack>
  );
}

export default ColonyUpgradeAction;
