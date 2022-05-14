import { ReactElement } from "react";
import { Box, Modal, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  closeCardActionsModal,
  selectCardActionsModal,
} from "redux/reducers/modals";
import { selectCard } from "redux/reducers/cards";
import GiveCardAction from "./GiveCardAction";
import ResearchTeamUpgradeAction from "./ResearchTeamUpgradeAction";
import { Colony, ResearchTeam } from "../../../assets/types/Cards";
import ColonyUpgradeAction from "./ColonyUpgradeAction";

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
          <Stack spacing={2}>
            <Typography variant={"h4"}>{card.name}</Typography>
            <GiveCardAction card={card} closeModal={handleClose} />
            {card.type === "ResearchTeam" &&
              !(card as ResearchTeam).researched && (
                <ResearchTeamUpgradeAction
                  researchTeam={card as ResearchTeam}
                  closeModal={handleClose}
                />
              )}
            {card.type === "Colony" && !(card as Colony).upgraded && (
              <ColonyUpgradeAction
                colony={card as Colony}
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
