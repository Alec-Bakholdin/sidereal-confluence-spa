import { ReactElement } from "react";
import CardBase from "../CardBase";
import { Stack, Typography } from "@mui/material";
import ConverterElement from "components/BaseElements/Converter/ConverterElement";
import ActiveCardDto from "../../../assets/dto/ActiveCardDto";

export function ResearchTeamElement({
  activeResearchCard,
}: {
  activeResearchCard: ActiveCardDto;
}): ReactElement {
  if (activeResearchCard.card.cardType !== "ResearchTeam") {
    throw Error("card type should be ResearchTeam");
  }
  const { researchTeam } = activeResearchCard.card;

  return (
    <CardBase title={researchTeam.name} era={researchTeam.era}>
      <Stack className={"center-box"}>
        <div>
          <ConverterElement
            converter={{
              input: researchTeam.researchOptions,
              output: { points: researchTeam.points },
              phase: "Trade",
            }}
            includeSlashes
            allowPropagation
          />
        </div>
        <Typography variant={"body1"}>
          {researchTeam.resultingTechnology &&
            `Researches ${researchTeam.resultingTechnology}`}
        </Typography>
      </Stack>
    </CardBase>
  );
}

export default ResearchTeamElement;
