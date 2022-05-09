import { ReactElement, useEffect, useState } from "react";
import { Alert, IconButton, Snackbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { errorsSelector, resetErrors } from "redux/reducers/errors";
import { Close } from "@mui/icons-material";

export function ErrorBar(): ReactElement {
  const [open, setOpen] = useState(false);
  const errors = useAppSelector(errorsSelector);
  useEffect(() => {
    if (errors.length > 0) {
      setOpen(true);
    }
  }, [errors]);

  const dispatch = useAppDispatch();
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      dispatch(resetErrors());
    }, 50);
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={1500}
      action={
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      }
    >
      <Alert severity={"error"}>{errors.join(", ")}</Alert>
    </Snackbar>
  );
}

export default ErrorBar;
