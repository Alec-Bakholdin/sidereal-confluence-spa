import { ReactElement } from "react";
import { Box } from "@mui/material";
import "./Game.scss";

export const Game = function (): ReactElement {
  return <Box sx={{ height: "100vh" }} overflow={"clip"}></Box>;
};

export default Game;
