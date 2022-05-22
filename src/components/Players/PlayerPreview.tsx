import { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import "./PlayerPreview.scss";
import PlayerResources from "../PlayerResources/PlayerResources";
import { Check } from "@mui/icons-material";
import PlayerDto from "../../assets/dto/PlayerDto";
import CardType from "../../assets/enums/CardType";

export function PlayerPreview({ player }: { player: PlayerDto }): ReactElement {
  const numCardsOfType = (type: CardType) => {
    const filteredCards = player.activeCards?.filter(
      (activeCard) => activeCard.card.cardType === type
    );
    return filteredCards?.length ?? 0;
  };
  const handleClick = () => {};

  return (
    <Box
      className={"player-preview"}
      key={player.user.username}
      onClick={handleClick}
    >
      <Typography variant={"h5"}>
        {player.user.username} {player.ready && <Check color={"success"} />}
      </Typography>
      <Typography variant={"h6"} color={"secondary"}>
        {player.race?.name}
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
