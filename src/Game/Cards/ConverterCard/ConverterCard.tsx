import { ReactElement, useState } from "react";
import Converter from "../Converter/Converter";
import { Box } from "@mui/material";
import UpgradedConverterCard from "./UpgradedConverterCard";
import BaseConverterCard from "./BaseConverterCard";

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
    <Box
      borderRadius={3}
      className={"center-box"}
      bgcolor={"background.paper"}
      sx={{
        border: "1px solid",
        width: 350,
        padding: 1,
      }}
    >
      {showUpgradedSide ? (
        <UpgradedConverterCard {...props} flipCard={flipCard} />
      ) : (
        <BaseConverterCard {...props} flipCard={flipCard} />
      )}
    </Box>
  );
}

export default ConverterCard;
