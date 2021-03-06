import { ReactElement, MouseEvent } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectCards } from "redux/reducers/cards";
import { openCardActionsModal } from "redux/reducers/modals";
import { Card, Colony, ConverterCard, ResearchTeam } from "assets/types/Cards";
import ConverterCardElement from "../ConverterCardElement/ConverterCardElement";
import ColonyElement from "../ColonyElement/ColonyElement";
import "./CardList.scss";
import ResearchTeamElement from "../ResearchTeamElement/ResearchTeamElement";
import { selectGameState } from "../../../../redux/reducers/gameState";
import CardBase from "../CardBase";

export function CardList({
  ids,
  currentPlayerCards,
  shipMinima,
}: {
  ids: string[];
  currentPlayerCards?: boolean;
  shipMinima?: number[];
}): ReactElement {
  const cards = useAppSelector(selectCards);
  const { phase } = useAppSelector(selectGameState);
  const dispatch = useAppDispatch();

  const handleClick = (e: MouseEvent<HTMLDivElement>, id: string) => {
    if (currentPlayerCards || (shipMinima && phase === "Confluence")) {
      e.stopPropagation();
      dispatch(openCardActionsModal(id));
    }
  };

  const renderCard = (card: Card) => {
    if (!card) {
      return <CardBase blank />;
    }
    switch (card.type) {
      case "Colony":
        return <ColonyElement colonyObj={card as Colony} />;
      case "ResearchTeam":
        return <ResearchTeamElement researchTeamObj={card as ResearchTeam} />;
      case "ConverterCard":
        return <ConverterCardElement converterCard={card as ConverterCard} />;
      default:
        console.error(`Card type ${card.type} not implemented`);
    }
  };
  return (
    <Paper className={"card-list"}>
      <Grid container direction={"row"}>
        {ids.map((id, i) => (
          <Grid
            className={`card-list-card ${
              (currentPlayerCards || (shipMinima && phase === "Confluence")) &&
              "interactive-card"
            }`}
            item
            key={i}
            onClick={(e) => handleClick(e, id)}
          >
            <Typography variant={"h5"} textAlign={"center"}>
              {shipMinima && shipMinima[i]}
            </Typography>
            {renderCard(cards[id])}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default CardList;
