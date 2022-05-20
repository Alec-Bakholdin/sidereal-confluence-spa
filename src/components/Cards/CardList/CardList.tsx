import { ReactElement, MouseEvent } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useAppDispatch } from "redux/hooks";
import { openCardActionsModal } from "redux/reducers/modals";
import { Card, Colony, ConverterCard, ResearchTeam } from "assets/types/Cards";
import ConverterCardElement from "../ConverterCardElement/ConverterCardElement";
import ColonyElement from "../ColonyElement/ColonyElement";
import "./CardList.scss";
import ResearchTeamElement from "../ResearchTeamElement/ResearchTeamElement";
import CardBase from "../CardBase";

export function CardList({
  ids,
  currentPlayerCards,
  shipMinima,
  colonyBidTrack,
  researchTeamBidTrack,
}: {
  ids: string[];
  currentPlayerCards?: boolean;
  shipMinima?: number[];
  colonyBidTrack?: boolean;
  researchTeamBidTrack?: boolean;
}): ReactElement {
  /*const cards = useAppSelector(selectCards);
  const { activeBidTrack, activeBidder } = useAppSelector(selectGameState);
  const playerId = useAppSelector(selectPlayerId);*/
  const dispatch = useAppDispatch();
  // this should actually only be interactive if active player is current player
  const isInteractive =
    currentPlayerCards || colonyBidTrack || researchTeamBidTrack;

  const handleClick = (e: MouseEvent<HTMLDivElement>, id: string) => {
    if (isInteractive) {
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
            className={`card-list-card ${isInteractive && "interactive-card"}`}
            item
            key={i}
            onClick={(e) => handleClick(e, id)}
          >
            <Typography variant={"h5"} textAlign={"center"}>
              {shipMinima && shipMinima[i]}
            </Typography>
            {renderCard({
              type: "ConverterCard",
              id: "testid",
              name: "name" /*cards[id]*/,
            })}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default CardList;
