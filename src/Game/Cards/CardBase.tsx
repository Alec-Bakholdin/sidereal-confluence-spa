import { Box } from "@mui/material";
import {ReactElement} from "react";

export function CardBase({children}: {children: ReactElement | ReactElement[]}): ReactElement {
  return <Box
    borderRadius={2}
    className={"center-box"}
    bgcolor={"background.paper"}
    sx={{
      border: "1px solid",
      width: 350,
      padding: 1,
    }}
  >{children}</Box>;
}

export default CardBase;