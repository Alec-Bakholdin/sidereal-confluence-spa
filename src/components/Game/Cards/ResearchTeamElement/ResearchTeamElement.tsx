import { ReactElement } from "react";
import { ResearchTeam } from "assets/types/Cards";
import CardBase from "../CardBase";
import { Stack, Typography } from "@mui/material";
import ConverterElement from "../../BaseElements/Converter/ConverterElement";

export function ResearchTeamElement({
  researchTeamObj,
}: {
  researchTeamObj: ResearchTeam;
}): ReactElement {
  return (
    <CardBase title={researchTeamObj.name} era={researchTeamObj.era}>
      <Stack className={"center-box"}>
        <div>
          <ConverterElement
            converter={{
              input: researchTeamObj.researchOptions,
              output: { points: researchTeamObj.points },
              phase: "Trade",
            }}
            includeSlashes
            allowPropagation
          />
        </div>
        <Typography variant={"body1"}>
          {researchTeamObj.resultingTechnology &&
            `Researches ${researchTeamObj.resultingTechnology}`}
        </Typography>
      </Stack>
    </CardBase>
  );
}

export default ResearchTeamElement;
