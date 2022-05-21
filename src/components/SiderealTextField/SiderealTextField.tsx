import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  KeyboardEvent,
  ReactElement,
} from "react";
import { TextField } from "@mui/material";

export function SiderealTextField({
  value,
  label,
  type,
  variant = "filled",
  onEnterPressed,
  onChange,
}: {
  value?: unknown;
  label?: string;
  type?: HTMLInputTypeAttribute;
  variant?: "standard" | "outlined" | "filled";
  onEnterPressed?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}): ReactElement {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (onEnterPressed && e.key === "Enter") {
      e.stopPropagation();
      onEnterPressed();
    }
  };

  return (
    <TextField
      variant={variant}
      label={label}
      type={type}
      value={value}
      onKeyDown={handleKeyDown}
      onChange={onChange}
    />
  );
}

export default SiderealTextField;
