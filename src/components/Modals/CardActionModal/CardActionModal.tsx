import { ReactElement } from "react";
import { Box, Modal, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  closeCardActionsModal,
  selectCardActionsModal,
} from "redux/reducers/modals";
import { selectCard } from "redux/reducers/cards";
import GiveCardAction from "./GiveCardAction";
import ResearchTeamAction from "./ResearchTeamAction";
import { ResearchTeam } from "../../../assets/types/Cards";

export function CardActionModal(): ReactElement {
  const { cardId, show } = useAppSelector(selectCardActionsModal);
  const card = useAppSelector(selectCard(cardId));
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeCardActionsModal());
  };

  return (
    <Modal open={show} onClose={handleClose}>
      <Box className={"modal"} bgcolor={"background.default"}>
        {card && (
          <Stack>
            <Typography variant={"h4"}>{card.name}</Typography>
            <GiveCardAction card={card} closeModal={handleClose} />
            {card.type === "ResearchTeam" && (
              <ResearchTeamAction
                researchTeam={card as ResearchTeam}
                closeModal={handleClose}
              />
            )}
          </Stack>
        )}
      </Box>
    </Modal>
  );
}

export default CardActionModal;
