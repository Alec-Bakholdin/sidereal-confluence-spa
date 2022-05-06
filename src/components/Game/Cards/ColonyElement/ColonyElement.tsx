import { ReactElement } from "react";
import CardBase from "../CardBase";
import { Colony } from "assets/types/Cards";

export function ColonyElement({
  colonyObj,
}: {
  colonyObj: Colony;
}): ReactElement {
  return (
    <CardBase>
      <div className="card-title">{colonyObj.name}</div>
    </CardBase>
  );
}

export default ColonyElement;
