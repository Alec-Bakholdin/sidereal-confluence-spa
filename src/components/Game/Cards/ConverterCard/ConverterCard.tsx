import { ReactElement, useState } from "react";
import Converter from "../Converter/Converter";
import CardBase from "../CardBase";
import { Box, Grid, IconButton, Typography } from "@mui/material";
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
  baseConverters: ReactElement<typeof Converter>[];
  acquisitionConverters?: ReactElement<typeof Converter>[];
  upgradeOptions: ReactElement<typeof Converter>[];

  upgradedName: string;
  upgradedConverters: ReactElement<typeof Converter>[];
}): ReactElement {
  const [showUpgradedSide, setShowUpgradedSide] = useState<boolean>(false);

  const displayedConverters = showUpgradedSide
    ? upgradedConverters
    : baseConverters;
  const displayedName = showUpgradedSide ? upgradedName : name;

  return (
    <>
      <CardBase>
        <Grid container className={"center-box"} direction={"row"}>
          <IconButton onClick={() => {}}>
            <ResourceIcon type={"acquisition"} />
          </IconButton>
          <Box display={"flex"}>
            <Typography variant={"h5"}>{displayedName}</Typography>
          </Box>
          <IconButton onClick={() => {}}>
            <ResourceIcon type={"upgrade"} />
          </IconButton>
        </Grid>
        <Grid container className={"center-box"} direction={"column"}>
          {displayedConverters.map((converter) => (
            <Grid item xs={10} key={converter.props.name}>
              {converter}
            </Grid>
          ))}
          <Grid item xs={2}>
            <IconButton onClick={() => setShowUpgradedSide(!showUpgradedSide)}>
              <Cached />
            </IconButton>
          </Grid>
        </Grid>
      </CardBase>
    </>
  );
}

export default ConverterCard;