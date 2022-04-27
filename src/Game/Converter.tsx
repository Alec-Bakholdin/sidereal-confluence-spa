import React, { ReactElement } from "react";
import Resources from "assets/types/Resources";
import GamePhase from "assets/types/GamePhase";
import { Box, Grid } from "@mui/material";
import { Forward } from "@mui/icons-material";
import ResourceIcon from "./ResourceIcon";

function renderResources(resources: Resources): ReactElement {
  return (
    <>
      <ResourceIcon type={'white'} qty={resources.white}/>
      <ResourceIcon type={'brown'} qty={resources.brown}/>
      <ResourceIcon type={'green'} qty={resources.green}/>

      <ResourceIcon type={'black'} qty={resources.black}/>
      <ResourceIcon type={'blue'} qty={resources.blue}/>
      <ResourceIcon type={'yellow'} qty={resources.yellow}/>

      <ResourceIcon type={'octagon'} qty={resources.octagon}/>
      <ResourceIcon type={'points'} qty={resources.points}/>

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
  return (
    <Box>
      <Grid
        container
        direction={"row"}
        spacing={0}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {renderResources(input)}
        <Forward />
        {renderResources(output)}
      </Grid>
    </Box>
  );
}

export default Converter;
