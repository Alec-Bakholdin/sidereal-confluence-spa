import React, { ReactElement } from "react";
import Resources from "../../../../assets/types/Resources";
import ResourceIcon from "../ResourceIcon/ResourceIcon";

export function ResourcesElement({
  resources,
  upgrade,
  acquisition,
  includeSlashes,
}: {
  resources: Resources;
  upgrade?: boolean;
  acquisition?: boolean;
  includeSlashes?: boolean;
}): ReactElement {
  const { white, brown, green, black, blue, yellow, octagon, points, ships } =
    resources;
  const resourceIcons = [
    upgrade && <ResourceIcon key={"upgrade"} type={"upgrade"} />,
    acquisition && <ResourceIcon key={"acquisition"} type={"acquisition"} />,
    white && <ResourceIcon key={"white"} type={"white"} qty={white} />,
    brown && <ResourceIcon key={"brown"} type={"brown"} qty={brown} />,
    green && <ResourceIcon key={"green"} type={"green"} qty={green} />,
    black && <ResourceIcon key={"black"} type={"black"} qty={black} />,
    blue && <ResourceIcon key={"blue"} type={"blue"} qty={blue} />,
    yellow && <ResourceIcon key={"yellow"} type={"yellow"} qty={yellow} />,
    ships && <ResourceIcon key={"ships"} type={"ships"} qty={ships} />,
    octagon && <ResourceIcon key={"octagon"} type={"octagon"} qty={octagon} />,
    points && <ResourceIcon key={"points"} type={"points"} qty={points} />,
  ]
    .filter((icon) => icon)
    // adds slashes if necessary
    .map((icon, i) => (
      <>
        {includeSlashes && i > 0 && <span key={`slash-${i}`}>/</span>}
        {icon}
      </>
    ));
  return <>{resourceIcons}</>;
}

export default ResourcesElement;
