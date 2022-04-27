import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import themeOptions from "./theme";

export const dark = createTheme(
  themeOptions({
    mode: "dark",
    primary: blueGrey,
    background: {
      default: "#212121",
      paper: blueGrey[500],
    },
    headerColor: "#6FF4FF",
  })
);

export default dark;
