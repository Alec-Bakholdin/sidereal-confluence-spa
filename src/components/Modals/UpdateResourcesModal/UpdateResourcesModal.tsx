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
import {
  APP_UPDATE_PLAYER_RESOURCES,
  UpdatePlayerResourcesClientMessage,
} from "assets/types/SocketTopics";
import { addError } from "redux/reducers/errors";

export function UpdateResourcesModal(): ReactElement {
  const dispatch = useAppDispatch();
  const stompClient = useStompClient();
  const { show, resources, isDonation } = useAppSelector(
    selectUpdateResourcesModal
  );
  const { playerId } = useAppSelector((state) => state.gameState);
  const [updatedResources, setUpdatedResources] =
    useState<Resources>(resources);

  useEffect(() => {
    if (show) {
      setUpdatedResources(resources);
    }
  }, [show, resources]);

  const handleClose = () => {
    dispatch(closeUpdateResourcesModal());
  };
  const handleSubmit = () => {
    if (stompClient) {
      stompClient.publish({
        destination: APP_UPDATE_PLAYER_RESOURCES,
        body: JSON.stringify({
          playerId,
          resources: updatedResources,
          donations: isDonation,
        } as UpdatePlayerResourcesClientMessage),
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
    <Modal open={show} onClose={handleClose}>
      <Box className={"modal"} height={"60%"} bgcolor={"background.default"}>
        <Typography variant={"h4"} textAlign={"center"}>
          Update Resources {isDonation ? " (Donation)" : ""}
        </Typography>
        <Box height={"75%"} overflow={"auto"}>
          <Stack marginTop={"20px"} className={"center-box"} spacing={2}>
            {types.map((type, i) => (
              <UpdateResourceField
                key={`resources-field-${i}`}
                type={type}
                value={(updatedResources as { [t: string]: number })[type] ?? 0}
                onChange={(value) =>
                  setUpdatedResources({ ...updatedResources, [type]: value })
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
