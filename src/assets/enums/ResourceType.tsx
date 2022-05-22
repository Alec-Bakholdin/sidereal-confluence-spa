import { ReactElement } from "react";
import { ReactComponent as Green } from "../images/resources/green.svg";
import { ReactComponent as White } from "../images/resources/white.svg";
import { ReactComponent as Brown } from "../images/resources/brown.svg";
import { ReactComponent as Black } from "../images/resources/black.svg";
import { ReactComponent as Blue } from "../images/resources/blue.svg";
import { ReactComponent as Yellow } from "../images/resources/yellow.svg";
import { ReactComponent as Octagon } from "../images/resources/octagon.svg";
import { ReactComponent as Points } from "../images/resources/points.svg";
import { ReactComponent as Upgrade } from "../images/resources/u.svg";
import { ReactComponent as Acquisition } from "../images/resources/a.svg";

export type ResourceType =
  | "green"
  | "white"
  | "brown"
  | "black"
  | "blue"
  | "yellow"
  | "octagon"
  | "points"
  | "ships";

export function getResourceSprite(
  resourceType: ResourceType | "upgrade" | "acquisition"
): ReactElement {
  switch (resourceType) {
    case "green":
      return <Green />;
    case "white":
      return <White />;
    case "brown":
      return <Brown />;
    case "black":
      return <Black />;
    case "blue":
      return <Blue />;
    case "yellow":
      return <Yellow />;
    case "octagon":
      return <Octagon />;
    case "points":
      return <Points />;
    case "ships":
    case "upgrade":
      return <Upgrade />;
    case "acquisition":
      return <Acquisition />;
    default:
      return <></>;
  }
}

export default ResourceType;
