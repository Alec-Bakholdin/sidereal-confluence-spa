import { ReactElement, useState } from "react";
import Converter from "../Converter/Converter";
import UpgradedConverterCard from "./UpgradedConverterCard";
import BaseConverterCard from "./BaseConverterCard";
import CardBase from "../CardBase";

export function ConverterCard(props: {
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
    <CardBase>
      {showUpgradedSide ? (
        <UpgradedConverterCard {...props} flipCard={flipCard} />
      ) : (
        <BaseConverterCard {...props} flipCard={flipCard} />
      )}
    </CardBase>
  );
}

export default ConverterCard;
