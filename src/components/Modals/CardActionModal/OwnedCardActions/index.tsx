import { Stack, Typography } from "@mui/material";
import GiveCardAction from "./GiveCardAction";
import {
  Card,
  Colony,
  ConverterCard,
  ResearchTeam,
} from "../../../../assets/types/Cards";
import ResearchTeamUpgradeAction from "./ResearchTeamUpgradeAction";
import ColonyUpgradeAction from "./ColonyUpgradeAction";
import ConverterCardUpgradeAction from "./ConverterCardUpgradeAction";

export function OwnedCardActions({
  card,
  handleClose,
}: {
  card: Card;
  handleClose: () => void;
}) {
  return (
    <Stack spacing={2}>
      <Typography variant={"h4"}>{card.name}</Typography>
      <GiveCardAction card={card} closeModal={handleClose} />
      {card.type === "ResearchTeam" && !(card as ResearchTeam).researched && (
        <ResearchTeamUpgradeAction
          researchTeam={card as ResearchTeam}
          closeModal={handleClose}
        />
      )}
      {card.type === "Colony" && !(card as Colony).upgraded && (
        <ColonyUpgradeAction colony={card as Colony} closeModal={handleClose} />
      )}
      {card.type === "ConverterCard" && !(card as ConverterCard).upgraded && (
        <ConverterCardUpgradeAction
          converterCard={card as ConverterCard}
          closeModal={handleClose}
        />
      )}
    </Stack>
  );
}

export default OwnedCardActions;
