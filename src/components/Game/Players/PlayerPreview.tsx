import { ReactElement } from "react";
import Player from "assets/types/Player";
import { Box, Typography } from "@mui/material";

import "./PlayerPreview.scss";
import PlayerResources from "../PlayerResources/PlayerResources";
import { CardType } from "assets/types/Cards";
import { Check } from "@mui/icons-material";

export function PlayerPreview({ player }: { player: Player }): ReactElement {
  const numCardsOfType = (type: CardType) => {
    /*const filteredCards = player.cards.filter(
      (cardId) => allCards[cardId]?.type === type
    );*/
    return type.length;
  };
  const handleClick = () => {};

  return (
    <Box className={"player-preview"} key={player.id} onClick={handleClick}>
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
