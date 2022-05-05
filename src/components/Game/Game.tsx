import { ReactElement, useEffect } from "react";
import { Drawer } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import "./Game.scss";
import { selectGameState, selectPlayerId } from "redux/reducers/gameState";

export const Game = function (): ReactElement {
  const dispatch = useAppDispatch();
  useEffect(() => {});
  const playerId = useAppSelector(selectPlayerId);
  const gameState = useAppSelector(selectGameState);

  return (
    <>
      <Drawer
        container={() => window?.document.body}
        variant={"permanent"}
        ModalProps={{ keepMounted: true }}
      >
        testing
      </Drawer>
      {JSON.stringify(gameState)}
    </>
  );
};

export default Game;
