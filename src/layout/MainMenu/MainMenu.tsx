import { Box, Grid, Typography } from "@mui/material";
import planet from "assets/images/menacing-planet.png";
import SiderealButton from "../../components/SiderealButton/SiderealButton";

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
        <SiderealButton onClick={() => console.log("test")} name={"Test"} />
      </Grid>
    </Box>
  );
};

export default MainMenu;
