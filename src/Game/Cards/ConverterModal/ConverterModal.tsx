import { ReactElement } from "react";
import Converter from "../Converter/Converter";
import { Box, Modal } from "@mui/material";

import "./ConverterModal.scss";

export function ConverterModal({
  converters,
  open,
  onClose,
}: {
  converters: ReactElement<typeof Converter>[];
  open: boolean;
  onClose: () => void;
}): ReactElement {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className={"converter-modal"}>{converters}</Box>
    </Modal>
  );
}

export default ConverterModal;
