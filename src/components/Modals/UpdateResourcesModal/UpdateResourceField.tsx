import { ReactElement } from "react";
import ResourceIcon from "../../Game/BaseElements/ResourceIcon/ResourceIcon";
import { ResourceType } from "../../../assets/types/Resources";
import { TextField } from "@mui/material";

export function UpdateResourceField({
  type,
  value,
  onChange,
  onSubmit,
}: {
  type: ResourceType;
  value: number;
  onChange: (val: number) => void;
  onSubmit: () => void;
}): ReactElement {
  return (
    <div>
      <ResourceIcon type={type} />
      <TextField
        type={"number"}
        value={value}
        variant={"standard"}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit();
          }
        }}
        onChange={(e) => {
          const changeStr = e.target.value;
          if (!changeStr) onChange(0);
          const changeInt = parseInt(changeStr, 10);
          if (changeInt >= 0) onChange(changeInt);
        }}
      />
    </div>
  );
}

export default UpdateResourceField;
