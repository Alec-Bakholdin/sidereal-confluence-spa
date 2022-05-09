import { ReactElement } from "react";
import { Grid, Paper } from "@mui/material";
import { useAppSelector } from "redux/hooks";
import { selectCards } from "redux/reducers/cards";
import { Card, Colony, ConverterCard, ResearchTeam } from "assets/types/Cards";
import ConverterCardElement from "../ConverterCardElement/ConverterCardElement";
import ColonyElement from "../ColonyElement/ColonyElement";
import "./CardList.scss";
import ResearchTeamElement from "../ResearchTeamElement/ResearchTeamElement";

export function CardList({
  ids,
  shipMinima,
}: {
  ids: string[];
  shipMinima?: number[];
}): ReactElement {
  const cards = useAppSelector(selectCards);
  const renderCard = (card: Card) => {
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
        {ids.map(
          (id, i) =>
            cards[id] && (
              <Grid item key={id}>
                {shipMinima && shipMinima[i]}
                {renderCard(cards[id])}
              </Grid>
            )
        )}
      </Grid>
    </Paper>
  );
}

export default CardList;
