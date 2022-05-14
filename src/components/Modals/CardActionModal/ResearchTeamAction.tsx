import { ReactElement, useState } from "react";
import { ResearchTeam } from "../../../assets/types/Cards";
import { Box, Button, Stack, Typography } from "@mui/material";
import ResourcesElement from "../../Game/BaseElements/ResourcesElement/ResourcesElement";

export function ResearchTeamAction({
  researchTeam,
  closeModal,
}: {
  researchTeam: ResearchTeam;
  closeModal: () => void;
}): ReactElement {
  const { researchOptions } = researchTeam;
  console.log(Object.entries(researchOptions));
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <Stack className={"center-box"} direction={"row"} spacing={1}>
      <Typography>Research for</Typography>
      {Object.entries(researchOptions).map(([key, value]) => {
        return (
          <Box
            border={"1px solid"}
            borderColor={selectedOption === key ? "white" : "transparent"}
            sx={{ cursor: "pointer" }}
            onClick={() => setSelectedOption(key)}
          >
            <ResourcesElement key={key} resources={{ [key]: value }} />
          </Box>
        );
      })}
      <Button variant={"outlined"} onClick={() => closeModal()}>
        OK
      </Button>
    </Stack>
  );
}

export default ResearchTeamAction;
