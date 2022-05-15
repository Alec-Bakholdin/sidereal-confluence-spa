import { ReactElement, useState } from "react";
import { ConverterCard } from "../../../../assets/types/Cards";
import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useStompClient } from "react-stomp-hooks";
import {
  APP_UPGRADE_CONVERTER_CARD,
  UpgradeConverterCardClientMessage,
} from "../../../../assets/types/SocketTopics";
import { useAppSelector } from "../../../../redux/hooks";

export function ConverterCardUpgradeAction({
  converterCard,
  closeModal,
}: {
  converterCard: ConverterCard;
  closeModal: () => void;
}): ReactElement {
  const upgradeActions = [];
  if (converterCard.upgradeTech1)
    upgradeActions.push(converterCard.upgradeTech1);
  if (converterCard.upgradeTech2)
    upgradeActions.push(converterCard.upgradeTech2);

  const stompClient = useStompClient();
  const { playerId } = useAppSelector((state) => state.gameState);
  const [selectedUpgradeAction, setSelectedUpgradeAction] = useState<string>(
    upgradeActions[0]
  );

  const handleChange = (e: SelectChangeEvent) => {
    setSelectedUpgradeAction(e.target.value as string);
  };

  const handleClick = () => {
    if (stompClient) {
      stompClient.publish({
        destination: APP_UPGRADE_CONVERTER_CARD,
        body: JSON.stringify({
          playerId,
          cardId: converterCard.id,
          technology: selectedUpgradeAction,
        } as UpgradeConverterCardClientMessage),
      });
      closeModal();
    }
  };

  return (
    <Stack className={"center-box"} direction={"row"} spacing={1}>
      <Typography>Upgrade Converter card using</Typography>
      <Select
        variant={"standard"}
        value={selectedUpgradeAction}
        onChange={handleChange}
      >
        {upgradeActions.map((upgradeAction) => (
          <MenuItem value={upgradeAction}>{upgradeAction}</MenuItem>
        ))}
      </Select>
      <Button variant={"outlined"} onClick={handleClick}>
        OK
      </Button>
    </Stack>
  );
}

export default ConverterCardUpgradeAction;
