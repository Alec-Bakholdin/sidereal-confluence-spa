import { Box, Grid, Typography } from "@mui/material";
import planet from "assets/images/menacing-planet.png";
import MenuButton from "./MenuButton";
import {Link} from "react-router-dom";

export const MainMenu = () => {
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
        <Link to={"/game"}>
          <MenuButton name={"New Game"} />
        </Link>
        <Link to={"/game"}>
          <MenuButton name={"Join Game"} />
        </Link>
        <Link to={"/daniel"}>
          <MenuButton name={"Daniel"}/>
        </Link>
      </Grid>
    </Box>
  );
};

export default MainMenu;
