import React, { ReactElement } from "react";
import ResourcesDto from "assets/dto/ResourcesDto";
import ResourceIcon from "../ResourceIcon/ResourceIcon";
import { Stack } from "@mui/material";

export function ResourcesElement({
  resources,
  upgrade,
  donation,
  acquisition,
  includeSlashes,
}: {
  resources: ResourcesDto;
  donation?: boolean;
  upgrade?: boolean;
  acquisition?: boolean;
  includeSlashes?: boolean;
}): ReactElement {
  const resourceIcons = [
    upgrade && <ResourceIcon key={"upgrade"} type={"upgrade"} />,
    acquisition && <ResourceIcon key={"acquisition"} type={"acquisition"} />,
    ...Object.keys(resources).map(
      (type) =>
        resources[type as keyof ResourcesDto] && (
          <ResourceIcon
            donation={donation}
            key={type}
            qty={resources[type as keyof ResourcesDto]}
            type={type as keyof ResourcesDto}
          />
        )
    ),
  ]
    .filter((icon) => icon)
    // adds slashes if necessary
    .map((icon, i) =>
      includeSlashes && i !== 0
        ? [<span key={`span-${i}`}>/</span>, icon]
        : [icon]
    )
    .flatMap((icon) => icon);
  return (
    <Stack direction={"row"} key={"resources-element-stack"}>
      {resourceIcons}
    </Stack>
  );
}

export default ResourcesElement;
