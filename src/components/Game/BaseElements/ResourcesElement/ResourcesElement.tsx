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
    upgrade && <ResourceIcon type={"upgrade"} />,
    acquisition && <ResourceIcon type={"acquisition"} />,
    white && <ResourceIcon type={"white"} qty={white} />,
    brown && <ResourceIcon type={"brown"} qty={brown} />,
    green && <ResourceIcon type={"green"} qty={green} />,
    black && <ResourceIcon type={"black"} qty={black} />,
    blue && <ResourceIcon type={"blue"} qty={blue} />,
    yellow && <ResourceIcon type={"yellow"} qty={yellow} />,
    ships && <ResourceIcon type={"ships"} qty={ships} />,
    octagon && <ResourceIcon type={"octagon"} qty={octagon} />,
    points && <ResourceIcon type={"points"} qty={points} />,
  ]
    .filter((icon) => icon)
    // adds slashes if necessary
    .map((icon, i) => (
      <>
        {includeSlashes && i > 0 && <span>/</span>}
        {icon}
      </>
    ));
  return <>{resourceIcons}</>;
}

export default ResourcesElement;
