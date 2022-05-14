import { ReactElement } from "react";
import { Card, ResearchTeam } from "../../../assets/types/Cards";
import { Grid } from "@mui/material";

export function ResearchTeamAction({
  researchTeam,
  closeModal,
}: {
  researchTeam: ResearchTeam;
  closeModal: () => void;
}): ReactElement {
  const { researchOptions } = researchTeam;

  return (
    <Grid container direction={"row"}>
      <Grid item>research team</Grid>
    </Grid>
  );
}

export default ResearchTeamAction;
