import { Box, Grid, Typography } from "@mui/material";
import planet from "assets/images/menacing-planet.png";
import MenuButton from "./MenuButton";
import { useAppDispatch } from "redux/hooks";
import { openJoinGameModal } from "redux/reducers/modals";
import { newGame } from "redux/reducers/gameState";

export const MainMenu = () => {
  const dispatch = useAppDispatch();
  const callNewGame = () => dispatch(newGame());
  const joinGame = () => dispatch(openJoinGameModal());

  return (
    <Box
      style={{
        backgroundImage: `url(${planet})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: "100vh",
      }}
    >
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        style={{ minHeight: "100vh" }}
      >
        <Typography variant={"h1"}>SIDEREAL CONFLUENCE</Typography>
        <MenuButton onClick={callNewGame} name={"New Game"} />
        <MenuButton onClick={joinGame} name={"Join Game"} />
      </Grid>
    </Box>
  );
};

export default MainMenu;
