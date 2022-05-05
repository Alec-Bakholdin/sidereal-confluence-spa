import { ReactElement, KeyboardEvent, useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { closeJoinGameModal, selectJoinGameModal } from "redux/reducers/modals";

import "./Modals.scss";
import { joinGame } from "redux/reducers/gameState";

export function JoinGameModal(): ReactElement {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectJoinGameModal);
  const closeModal = () => dispatch(closeJoinGameModal());

  const [username, setUsername] = useState<string>("");
  const onJoinGame = () => {
    dispatch(joinGame({ playerName: username }));
  };
  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUsername(e.target.value);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      onJoinGame();
    }
  };

  return (
    <Modal open={open} onClose={closeModal}>
      <Box className={"modal"} sx={{ backgroundColor: "background.paper" }}>
        <Stack className={"center-box"} spacing={2}>
          <Typography variant={"h2"}>Join Game</Typography>
          <TextField
            label={"Username"}
            value={username}
            onChange={(e) => handleOnChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <Button>
            <Typography variant={"h5"} onClick={() => onJoinGame()}>
              Join
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default JoinGameModal;
