import { ReactElement, useEffect } from "react";
import { Drawer } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { rejoinGame } from "redux/reducers/gameState";

import "./Game.scss";

export const Game = function (): ReactElement {
  const dispatch = useAppDispatch();
  const { playerId, playerName, isFresh, gameState } = useAppSelector(
    (state) => state.gameState
  );
  useEffect(() => {
    if (!isFresh && playerId && playerName) {
      dispatch(rejoinGame({ playerId, playerName }));
    }
  });

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
