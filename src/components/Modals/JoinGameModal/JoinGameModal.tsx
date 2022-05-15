import { ReactElement, KeyboardEvent, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { closeJoinGameModal, selectJoinGameModal } from "redux/reducers/modals";
import { joinGame } from "redux/reducers/gameState";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import "./JoinGameModal.scss";
import { RaceName } from "assets/types/Race";

export function JoinGameModal(): ReactElement {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const open = useAppSelector(selectJoinGameModal);
  const closeModal = () => dispatch(closeJoinGameModal());
  const [cookies] = useCookies(["playerName", "race"]);

  const [username, setUsername] = useState<string>(cookies.playerName);
  const [race, setRace] = useState<RaceName>("Caylion");
  const onJoinGame = () => {
    dispatch(joinGame({ playerName: username, raceName: race }));
    closeModal();
    navigate("/game");
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      onJoinGame();
    }
  };

  const raceNames = ["Caylion", "Faderan", "Yengii", "Kjasjavikalimm"];

  return (
    <Modal open={open} onClose={closeModal}>
      <Box
        className={"join-game-modal modal"}
        sx={{ backgroundColor: "background.paper" }}
      >
        <Stack className={"center-box"} spacing={2}>
          <Typography variant={"h2"}>Join Game</Typography>
          <TextField
            label={"Username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <Select
            label={"Race Name"}
            value={race}
            onChange={(e) => setRace(e.target.value as RaceName)}
          >
            {raceNames.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
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
