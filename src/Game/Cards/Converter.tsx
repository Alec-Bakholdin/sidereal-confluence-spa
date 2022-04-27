import React, { ReactElement, useState } from "react";
import Resources from "assets/types/Resources";
import GamePhase from "assets/types/GamePhase";
import { Box, Grid } from "@mui/material";
import { Forward } from "@mui/icons-material";
import ResourceIcon from "./ResourceIcon";

function renderResources(resources: Resources): ReactElement {
  return (
    <>
      <ResourceIcon type={"white"} qty={resources.white} />
      <ResourceIcon type={"brown"} qty={resources.brown} />
      <ResourceIcon type={"green"} qty={resources.green} />

      <ResourceIcon type={"black"} qty={resources.black} />
      <ResourceIcon type={"blue"} qty={resources.blue} />
      <ResourceIcon type={"yellow"} qty={resources.yellow} />

      <ResourceIcon type={"octagon"} qty={resources.octagon} />
      <ResourceIcon type={"points"} qty={resources.points} />
    </>
  );
}

export function Converter({
  input,
  output,
  gamePhase,
}: {
  input: Resources;
  output: Resources;
  gamePhase: GamePhase;
}): ReactElement {
  const [borderColor, setBorderColor] = useState<string>("transparent");

  return (
    <Box
      height={80}
      width={370}
      border={1}
      borderColor={borderColor}
      borderRadius={1}
      marginTop={2}
      onMouseEnter={() => setBorderColor('white')}
      onMouseLeave={() => setBorderColor('transparent')}
    >
      <Grid container height={"100%"}>
        <Grid
          container
          item
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid container item xs={5} justifyContent={"right"}>
            {renderResources(input)}
          </Grid>
          <Grid item container xs={2} justifyContent={"center"}  color={gamePhase === 'econ' ? 'purple' : 'white'}>
            <Forward/>
          </Grid>
          <Grid container item xs={5} justifyContent={"left"}>
            {renderResources(output)}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Converter;
