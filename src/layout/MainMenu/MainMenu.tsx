import { Box, Grid, Typography } from "@mui/material";
import planet from "assets/images/menacing-planet.png";

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
      </Grid>
    </Box>
  );
};

export default MainMenu;
