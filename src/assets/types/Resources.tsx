import { ReactComponent as Black } from "assets/images/resources/black.svg";
import { ReactComponent as Blue } from "assets/images/resources/blue.svg";
import { ReactComponent as Brown } from "assets/images/resources/brown.svg";
import { ReactComponent as Green } from "assets/images/resources/green.svg";
import { ReactComponent as Octagon } from "assets/images/resources/octagon.svg";
import { ReactComponent as White } from "assets/images/resources/white.svg";
import { ReactComponent as Yellow } from "assets/images/resources/yellow.svg";
import { ReactComponent as Points } from "assets/images/resources/points.svg";
import { ReactComponent as Upgrade } from "assets/images/resources/u.svg";
import { ReactComponent as Acquisition } from "assets/images/resources/a.svg";
import { ReactElement } from "react";

export interface Resources {
  green?: number;
  white?: number;
  brown?: number;
  black?: number;
  blue?: number;
  yellow?: number;
  ships?: number;
  octagon?: number;
  points?: number;
}

export type ResourceType =
  | "green"
  | "white"
  | "brown"
  | "black"
  | "blue"
  | "yellow"
  | "octagon"
  | "points"
  | "ships"
  | "upgrade"
  | "acquisition";

export function getResourceSprite(resourceType: ResourceType): ReactElement {
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

export default Resources;
