import { ReactElement, ReactNode } from "react";
import "./BaseModal.scss";
import { Box, Modal, Stack, Typography } from "@mui/material";

export function BaseModal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
}): ReactElement {
  return (
    <Modal className={"center-box"} open={open} onClose={onClose}>
      <Box className={"modal-box"} bgcolor={"background.default"}>
        <Stack className={"center-box"} spacing={3}>
          {title && <Typography variant={"h3"}>{title}</Typography>}
          {children}
        </Stack>
      </Box>
    </Modal>
  );
}

export default BaseModal;
