import { createTheme } from "@mui/material";
import {blue, blueGrey, lightBlue} from "@mui/material/colors";

export const light = createTheme({
  palette: {
    mode: "dark",
    primary: lightBlue,
  },
});

export default light;
