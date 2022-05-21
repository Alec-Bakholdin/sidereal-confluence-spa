import { Box, Grid, Typography } from "@mui/material";
import planet from "assets/images/menacing-planet.png";
import SiderealButton from "components/SiderealButton/SiderealButton";
import { useAppDispatch } from "redux/hooks";
import { createGame } from "redux/reducers/game";
import { openJoinGameModal } from "../../redux/reducers/modals";

export const MainMenu = () => {
  const dispatch = useAppDispatch();
  const handleCreateGame = () => {
    dispatch(createGame({}));
  };
  const handleJoinGame = () => {
    console.log("joining game???");
    dispatch(openJoinGameModal());
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${planet})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: "100vh",
      }}
    >
      <Grid
        container
        direction={"column"}
        className={"center-box"}
        style={{ minHeight: "100vh" }}
      >
        <Typography variant={"h1"}>SIDEREAL CONFLUENCE</Typography>
        <SiderealButton
          onClick={handleCreateGame}
          textVariant={"h4"}
          name={"Create Game"}
        />
        <SiderealButton
          onClick={handleJoinGame}
          textVariant={"h4"}
          name={"Join Game"}
        />
      </Grid>
    </Box>
  );
};

export default MainMenu;
