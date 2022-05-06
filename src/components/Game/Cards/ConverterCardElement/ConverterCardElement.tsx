import { ReactElement } from "react";
import CardBase from "../CardBase";
import { Box, Stack, Typography } from "@mui/material";
import { ConverterCard } from "assets/types/Cards";
import ConverterElement from "../Converter/ConverterElement";
import Converter from "assets/types/Converter";

export function ConverterCardElement({
  converterCard,
}: {
  converterCard: ConverterCard;
}): ReactElement {
  const converterElementFromObj = (converterObj: Converter) => (
    <ConverterElement converter={converterObj} />
  );

  return (
    <>
      <CardBase>
        <Box className={"center-box"}>
          <Stack>
            <Typography variant={"h5"}>{converterCard.name}</Typography>
            {converterCard.frontConverters?.map(converterElementFromObj)}
            {converterCard.backConverters?.map(converterElementFromObj)}
          </Stack>
        </Box>
      </CardBase>
    </>
  );
}

export default ConverterCardElement;
