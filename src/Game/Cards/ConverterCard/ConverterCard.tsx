import { ReactElement, useState } from "react";
import Converter from "../Converter/Converter";
import CardBase from "../CardBase";
import { Box, Grid, Icon, IconButton, Stack, Typography } from "@mui/material";
import ResourceIcon from "../ResourceIcon/ResourceIcon";
import { Cached } from "@mui/icons-material";

export function ConverterCard({
  name,
  baseConverters,
  acquisitionConverters,
  upgradeOptions,
  upgradedName,
  upgradedConverters,
}: {
  name: string;
  baseConverters: Array<ReactElement<typeof Converter>>;
  acquisitionConverters?: Array<ReactElement<typeof Converter>>;
  upgradeOptions: Array<ReactElement<typeof Converter>>;

  upgradedName: string;
  upgradedConverters: Array<ReactElement<typeof Converter>>;
}): ReactElement {
  const [showUpgradedSide, setShowUpgradedSide] = useState<boolean>(false);
  const flipCard = function () {
    setShowUpgradedSide(!showUpgradedSide);
  };

  return (
    <Box margin={"10px"}>
      <CardBase>
        <Grid item container className={"center-box"} direction={"row"}>
          <IconButton>
            <ResourceIcon type={"acquisition"} />
          </IconButton>
          <Box display={"flex"}>
            <Typography variant={"h5"}>{name}</Typography>
          </Box>
          <IconButton>
            <ResourceIcon type={"upgrade"} />
          </IconButton>

          {showUpgradedSide ? upgradedConverters : baseConverters}
        </Grid>
      </CardBase>
    </Box>
  );
}

export default ConverterCard;
