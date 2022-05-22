import React, { ReactElement } from "react";
import { Box, Grid } from "@mui/material";
import { Forward } from "@mui/icons-material";
import "./ConverterElement.scss";
import ConverterDto from "assets/dto/ConverterDto";
import ResourcesElement from "../ResourcesElement/ResourcesElement";

export function ConverterElement({
  converter,
  selected,
  upgrade,
  acquisition,
  includeSlashes,
  onClick,
  allowPropagation,
}: {
  converter: ConverterDto;
  selected?: boolean;
  upgrade?: boolean;
  acquisition?: boolean;
  includeSlashes?: boolean;
  onClick?: () => void;
  allowPropagation?: boolean;
}): ReactElement {
  return (
    <Box
      className={`converter ${selected ? "selected-converter" : ""}`}
      border={1}
      onClick={(e) => {
        if (onClick) {
          onClick();
        }
        if (!allowPropagation) {
          e.stopPropagation();
        }
      }}
    >
      <Grid container direction={"row"} className={"center-box"}>
        <Box>
          <ResourcesElement
            resources={converter.input ?? {}}
            includeSlashes={includeSlashes}
          />
        </Box>
        <Box color={converter.phase === "Trade" ? "purple" : "white"}>
          <Forward />
        </Box>
        <Box>
          <ResourcesElement
            resources={converter.output ?? {}}
            upgrade={upgrade}
            acquisition={acquisition}
            includeSlashes={includeSlashes}
          />
          <ResourcesElement resources={converter.donations ?? {}} donation />
        </Box>
      </Grid>
    </Box>
  );
}

export default ConverterElement;
