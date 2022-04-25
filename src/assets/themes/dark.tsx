import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const dark = createTheme({
  palette: {
    mode: "dark",
    primary: blueGrey,
  },
});

export default dark;
