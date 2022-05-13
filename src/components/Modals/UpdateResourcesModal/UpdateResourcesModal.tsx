import { ReactElement, useEffect, useState } from "react";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  closeUpdateResourcesModal,
  selectUpdateResourcesModal,
} from "redux/reducers/modals";
import Resources, { ResourceType } from "assets/types/Resources";
import UpdateResourceField from "./UpdateResourceField";
import { useStompClient } from "react-stomp-hooks";
import { APP_UPDATE_PLAYER_RESOURCES } from "assets/types/SocketTopics";
import { addError } from "redux/reducers/errors";

export function UpdateResourcesModal(): ReactElement {
  const dispatch = useAppDispatch();
  const stompClient = useStompClient();
  const open = useAppSelector(selectUpdateResourcesModal);
  const { gameState, playerId } = useAppSelector((state) => state.gameState);
  const [resources, setResources] = useState<Resources>({});

  useEffect(() => {
    if (gameState.players[playerId ?? ""]) {
      setResources(gameState.players[playerId ?? ""].resources);
    }
  }, [gameState.players, playerId]);
  const handleClose = () => {
    dispatch(closeUpdateResourcesModal());
  };
  const handleSubmit = () => {
    if (stompClient) {
      stompClient.publish({
        destination: APP_UPDATE_PLAYER_RESOURCES,
        body: JSON.stringify({
          playerId,
          resources,
        }),
      });
    } else {
      dispatch(addError("Stomp client not connected"));
    }
    handleClose();
  };
  const types: ResourceType[] = [
    "white",
    "brown",
    "green",
    "black",
    "blue",
    "yellow",
    "octagon",
    "points",
    "ships",
  ];

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={"modal"} height={"60%"} bgcolor={"background.default"}>
        <Typography variant={"h4"} textAlign={"center"}>
          Update Resources
        </Typography>
        <Box height={"75%"} overflow={"auto"}>
          <Stack marginTop={"20px"} className={"center-box"} spacing={2}>
            {types.map((type, i) => (
              <UpdateResourceField
                key={`resources-field-${i}`}
                type={type}
                value={(resources as { [t: string]: number })[type]}
                onChange={(value) =>
                  setResources({ ...resources, [type]: value })
                }
                onSubmit={handleSubmit}
              />
            ))}
          </Stack>
        </Box>
        <Box className={"center-box"}>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default UpdateResourcesModal;
