import { ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  closePlayerDetailsModal,
  selectPlayerDetailsModal,
} from "redux/reducers/modals";
import { Box, Modal, Typography } from "@mui/material";
import "./PlayerDetailsModal.scss";
import { selectGameState } from "redux/reducers/gameState";
import PlayerResources from "components/Game/PlayerResources/PlayerResources";
import CardList from "components/Game/Cards/CardList/CardList";

export function PlayerDetailsModal(): ReactElement {
  const { playerId, show } = useAppSelector(selectPlayerDetailsModal);
  const gameState = useAppSelector(selectGameState);
  const player = gameState.players[playerId];
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(closePlayerDetailsModal());
  useEffect(() => {
    if (!playerId || !player) {
      handleClose();
    }
  });

  return (
    <Modal open={show} onClose={handleClose}>
      <>
        {player && (
          <Box
            className={"modal player-details-modal"}
            sx={{ backgroundColor: "background.default" }}
          >
            <Typography variant={"h4"}>{player.name}</Typography>
            <PlayerResources resources={player.resources} />
            <CardList ids={player.cards} />
          </Box>
        )}
      </>
    </Modal>
  );
}

export default PlayerDetailsModal;
