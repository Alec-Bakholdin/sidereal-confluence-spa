import { ReactElement } from "react";
import { Grid, Paper } from "@mui/material";
import { useAppSelector } from "redux/hooks";
import { selectCards } from "redux/reducers/cards";
import { Card, Colony, ConverterCard } from "assets/types/Cards";
import ConverterCardElement from "../ConverterCardElement/ConverterCardElement";
import ColonyElement from "../ColonyElement/ColonyElement";
import "./CardList.scss";

export function CardList({ ids }: { ids: string[] }): ReactElement {
  const cards = useAppSelector(selectCards);
  const renderCard = (card: Card) => {
    switch (card.type) {
      case "Colony":
        return <ColonyElement colonyObj={card as Colony} />;
      case "ResearchTeam":
        return <></>;
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
          (id) =>
            cards[id] &&
            cards[id].type !== "ResearchTeam" && (
              <Grid item xs={4}>
                {renderCard(cards[id])}
              </Grid>
            )
        )}
      </Grid>
    </Paper>
  );
}

export default CardList;
