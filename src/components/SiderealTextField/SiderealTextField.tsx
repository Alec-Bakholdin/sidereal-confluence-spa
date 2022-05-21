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
  autoFocus,
}: {
  value?: unknown;
  label?: string;
  type?: HTMLInputTypeAttribute;
  variant?: "standard" | "outlined" | "filled";
  onEnterPressed?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
}): ReactElement {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (onEnterPressed && e.key === "Enter") {
      e.stopPropagation();
      onEnterPressed();
    }
  };

  return (
    <TextField
      autoFocus={autoFocus}
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
