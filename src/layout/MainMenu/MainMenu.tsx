import { Box, Stack, Typography } from "@mui/material";
import planet from "assets/images/menacing-planet.png";
import SiderealButton from "components/SiderealButton/SiderealButton";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { createGame } from "redux/reducers/game";
import { openJoinGameModal } from "redux/reducers/modals";

export const MainMenu = () => {
  const dispatch = useAppDispatch();
  const { loading, game } = useAppSelector((state) => state.game);
  const handleCreateGame = () => {
    if (!loading && !game) {
      dispatch(createGame({}));
    }
  };
  const handleJoinGame = () => {
    if (!loading && !game) {
      dispatch(openJoinGameModal());
    }
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
      <Stack
        direction={"column"}
        className={"center-box"}
        spacing={5}
        style={{ height: "100vh" }}
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
      </Stack>
    </Box>
  );
};

export default MainMenu;
