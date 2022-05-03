import { ReactElement } from "react";
import { Button, Grid } from "@mui/material";
import {
  increment,
  decrement,
  incrementByAmount,
} from "redux/reducers/gameState";
import { useAppDispatch, useAppSelector } from "redux/hooks";

export const Game = function (): ReactElement {
  const count = useAppSelector((state) => state.gameState.value);
  const dispatch = useAppDispatch();

  return (
    <Grid
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      sx={{}}
    >
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </Button>
      <div>{count}</div>
    </Grid>
  );
};

export default Game;
