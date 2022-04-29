import { ReactElement } from "react";
import ConverterCard from "./Cards/ConverterCard/ConverterCard";
import { Grid } from "@mui/material";
import Converter from "./Cards/Converter/Converter";

export const Game = function (): ReactElement {
  return (
    <Grid
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      sx={{}}
    >
      <ConverterCard
        name={"Name"}
        upgradedName={"Upgraded"}
        baseConverters={[
          <Converter
            input={{ black: 2, white: 1 }}
            output={{ octagon: 1, points: 1 }}
            gamePhase={"econ"}
          />,
          <Converter
            input={{ green: 1 }}
            output={{ yellow: 1 }}
            gamePhase={"econ"}
          />,
        ]}
        upgradedConverters={[
          <Converter
            input={{ green: 1 }}
            output={{ yellow: 3 }}
            gamePhase={"econ"}
          />,
        ]}
        acquisitionConverters={[
          <Converter
            input={{ black: 1, yellow: 2 }}
            output={{ points: 1 }}
            gamePhase={"trade"}
            acquisition
          />,
        ]}
        upgradeOptions={[
          <Converter
            input={{ green: 1 }}
            output={{}}
            gamePhase={"trade"}
            upgrade
          />,
          <Converter
            input={{ white: 1 }}
            output={{}}
            gamePhase={"trade"}
            upgrade
          />,
        ]}
      />
    </Grid>
  );
};

export default Game;
