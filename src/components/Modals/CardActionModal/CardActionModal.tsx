import { ReactElement } from "react";
import { Box, Modal } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  closeCardActionsModal,
  selectCardActionsModal,
} from "redux/reducers/modals";
import { selectCard } from "redux/reducers/cards";
import OwnedCardActions from "./OwnedCardActions";
import { selectPlayerById } from "redux/reducers/gameState";
import ConfluenceCardActions from "./ConfluenceCardActions/ConfluenceCardActions";

export function CardActionModal(): ReactElement {
  const { cardId, show } = useAppSelector(selectCardActionsModal);
  const card = useAppSelector(selectCard(cardId));
  const dispatch = useAppDispatch();
  const { playerId } = useAppSelector((state) => state.gameState);
  const player = useAppSelector(selectPlayerById(playerId));

  const handleClose = () => {
    dispatch(closeCardActionsModal());
  };

  return (
    <Modal open={show} onClose={handleClose}>
      <Box className={"modal"} bgcolor={"background.default"}>
        {card && (
          <>
            {player?.cards.includes(card.id) ? (
              <OwnedCardActions card={card} handleClose={handleClose} />
            ) : (
              <ConfluenceCardActions card={card} handleClose={handleClose} />
            )}
          </>
        )}
      </Box>
    </Modal>
  );
}

export default CardActionModal;
