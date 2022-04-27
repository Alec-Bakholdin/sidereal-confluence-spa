import React, { ReactElement } from "react";
import { getResourceSprite, ResourceType } from "../assets/types/Resources";
import { Icon, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: "2.5em",
  },
  count: {
    position: "absolute",
    lineHeight: 1,
    color: "#ffffff",
    top: "0.8em",
    fontSize: "1em",
  },
});

export function ResourceIcon({
  type,
  qty,
}: {
  type: ResourceType;
  qty?: number;
}): ReactElement {
  const classes = useStyles();

  if (!qty) {
    return <></>;
  }

  return (
    <div className={classes.root}>
      <Icon fontSize={"large"} className={classes.icon}>
        {getResourceSprite(type)}
      </Icon>
      <Typography component={"span"} className={classes.count}>
        {qty}
      </Typography>
    </div>
  );
}

export default ResourceIcon;
