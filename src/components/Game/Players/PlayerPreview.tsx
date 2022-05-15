import { ReactElement } from "react";
import Player from "assets/types/Player";
import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectPlayerId } from "redux/reducers/gameState";

import "./PlayerPreview.scss";
import PlayerResources from "../PlayerResources/PlayerResources";
import { CardType } from "assets/types/Cards";
import { selectCards } from "redux/reducers/cards";
import { openPlayerDetailsModal } from "redux/reducers/modals";
import { Check } from "@mui/icons-material";

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
      <Typography variant={"h5"}>
        {player.name} {player.ready && <Check color={"success"} />}
      </Typography>
      <Typography variant={"h6"} color={"secondary"}>
        {player.race.name}
      </Typography>
      <div className={"player-preview-resources"}>
        <PlayerResources resources={player.resources} />
        <PlayerResources resources={player.donations} donations />
        <div>{`Research Teams: ${numCardsOfType("ResearchTeam")}`}</div>
        <div>{`Converter Cards: ${numCardsOfType("ConverterCard")}`}</div>
        <div>{`Colony: ${numCardsOfType("Colony")}`}</div>
      </div>
    </Box>
  );
}

export default PlayerPreview;
