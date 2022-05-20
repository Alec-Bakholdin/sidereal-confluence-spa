import { Box, Grid, Typography } from "@mui/material";
import planet from "assets/images/menacing-planet.png";
import MenuButton from "./MenuButton";

export const MainMenu = () => {
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
        <MenuButton onClick={() => console.log("test")} name={"Test"} />
      </Grid>
    </Box>
  );
};

export default MainMenu;
