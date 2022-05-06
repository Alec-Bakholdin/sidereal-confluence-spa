import { ReactElement } from "react";
import Player from "assets/types/Player";
import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectPlayerId } from "redux/reducers/gameState";

import "./PlayerPreview.scss";
import PlayerResources from "../PlayerResources/PlayerResources";
import { CardType } from "assets/types/Cards";
import { selectCards } from "redux/reducers/cards";
import { openPlayerDetailsModal } from "../../../redux/reducers/modals";

export function PlayerPreview({ player }: { player: Player }): ReactElement {
  const dispatch = useAppDispatch();
  const playerId = useAppSelector(selectPlayerId);
  const allCards = useAppSelector(selectCards);

  const numCardsOfType = (type: CardType) => {
    const filteredCards = player.cards.filter(
      (cardId) => allCards[cardId]?.type === type
    );
    return filteredCards.length;
  };
  const handleClick = () => {
    dispatch(openPlayerDetailsModal(player.id));
  };

  return (
    <Box className={"player-preview"} key={playerId} onClick={handleClick}>
      <Typography variant={"h5"}>{`${player.name} ${
        player.id === playerId ? "(me)" : ""
      }`}</Typography>
      <div className={"player-preview-resources"}>
        <PlayerResources resources={player.resources} />
        <div>{`Research Teams: ${numCardsOfType("ResearchTeam")}`}</div>
        <div>{`Converter Cards: ${numCardsOfType("ConverterCard")}`}</div>
        <div>{`Colony: ${numCardsOfType("Colony")}`}</div>
      </div>
    </Box>
  );
}

export default PlayerPreview;
