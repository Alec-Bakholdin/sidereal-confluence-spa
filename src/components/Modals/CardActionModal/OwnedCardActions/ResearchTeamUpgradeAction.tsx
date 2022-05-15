import { ReactElement, useState } from "react";
import { ResearchTeam } from "assets/types/Cards";
import { Box, Button, Stack, Typography } from "@mui/material";
import ResourcesElement from "components/Game/BaseElements/ResourcesElement/ResourcesElement";
import Resources from "assets/types/Resources";
import { useStompClient } from "react-stomp-hooks";
import {
  APP_FLIP_RESEARCH_TEAM,
  FlipResearchTeamClientMessage,
} from "assets/types/SocketTopics";
import { useAppSelector } from "redux/hooks";

export function ResearchTeamUpgradeAction({
  researchTeam,
  closeModal,
}: {
  researchTeam: ResearchTeam;
  closeModal: () => void;
}): ReactElement {
  const { playerId } = useAppSelector((state) => state.gameState);
  const { researchOptions } = researchTeam;
  const [selectedOption, setSelectedOption] = useState<keyof Resources>();
  const stompClient = useStompClient();

  const handleClick = () => {
    if (selectedOption && stompClient) {
      stompClient.publish({
        destination: APP_FLIP_RESEARCH_TEAM,
        body: JSON.stringify({
          cardId: researchTeam.id,
          playerId: playerId,
          cost: { [selectedOption]: researchOptions[selectedOption] },
        } as FlipResearchTeamClientMessage),
      });
      closeModal();
    }
  };

  return (
    <Stack className={"center-box"} direction={"row"} spacing={1}>
      <Typography>Research for</Typography>
      {Object.entries(researchOptions).map(([key, value]) => {
        const cost: Resources = { [key]: value };
        return (
          <Box
            border={"1px solid"}
            borderColor={selectedOption === key ? "white" : "transparent"}
            sx={{ cursor: "pointer" }}
            onClick={() => setSelectedOption(key as keyof Resources)}
          >
            <ResourcesElement key={key} resources={cost} />
          </Box>
        );
      })}
      <Button variant={"outlined"} onClick={handleClick}>
        OK
      </Button>
    </Stack>
  );
}

export default ResearchTeamUpgradeAction;
