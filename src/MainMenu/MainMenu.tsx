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
          <MenuButton onClick={() => console.log("join")} name={"Join Game"} />
        </Link>
      </Grid>
    </Box>
  );
};

export default MainMenu;
