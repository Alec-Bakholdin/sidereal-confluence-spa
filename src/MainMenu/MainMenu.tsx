import { Box, Grid, Typography } from "@mui/material";
import planet from "assets/images/menacing-planet.png";
import MenuButton from "./MenuButton";

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
        spacing={0}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        style={{ minHeight: "100vh" }}
      >
        <Grid
          item
          container
          justifyContent={"center"}
          alignItems={"center"}
          spacing={0}
          direction={"column"}
        >
          <Typography variant={"h1"}>SIDEREAL CONFLUENCE</Typography>
          <MenuButton onClick={() => console.log("new")} name={"New Game"} />
          <MenuButton onClick={() => console.log("join")} name={"Join Game"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainMenu;
