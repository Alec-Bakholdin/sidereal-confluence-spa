import { ReactElement, MouseEvent } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useAppDispatch } from "redux/hooks";
import { openCardActionsModal } from "redux/reducers/modals";
import ConverterCardElement from "../ConverterCardElement/ConverterCardElement";
import ColonyElement from "../ColonyElement/ColonyElement";
import "./CardList.scss";
import ResearchTeamElement from "../ResearchTeamElement/ResearchTeamElement";
import CardBase from "../CardBase";
import ActiveCardDto from "../../../assets/dto/ActiveCardDto";

export function CardList({
  cards,
  currentPlayerCards,
  shipMinima,
  colonyBidTrack,
  researchTeamBidTrack,
}: {
  cards: ActiveCardDto[];
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

  const handleClick = (e: MouseEvent<HTMLDivElement>, card: ActiveCardDto) => {
    if (isInteractive) {
      e.stopPropagation();
      dispatch(openCardActionsModal(""));
    }
  };

  const renderCard = (activeCard: ActiveCardDto) => {
    if (!activeCard) {
      return <CardBase blank />;
    }
    switch (activeCard.card.cardType) {
      case "Colony":
        return <ColonyElement activeColonyCard={activeCard} />;
      case "ResearchTeam":
        return <ResearchTeamElement activeResearchCard={activeCard} />;
      case "ConverterCard":
        return <ConverterCardElement activeConverterCard={activeCard} />;
      default:
        console.error(`Card type ${activeCard.card.cardType} not implemented`);
    }
  };
  return (
    <Paper className={"card-list"}>
      <Grid container direction={"row"}>
        {cards.map((card, i) => (
          <Grid
            className={`card-list-card ${isInteractive && "interactive-card"}`}
            item
            key={i}
            onClick={(e) => handleClick(e, card)}
          >
            <Typography variant={"h5"} textAlign={"center"}>
              {shipMinima && shipMinima[i]}
            </Typography>
            {renderCard(card)}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default CardList;
