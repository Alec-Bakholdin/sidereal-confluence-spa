import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import themeOptions from "./theme";

export const dark = createTheme(
  themeOptions({
    mode: "dark",
    primary: blueGrey,
    background: {
      default: "#212121",
    },
    header1234color: "#6FF4FF",
    header56color: "#FFF",
  })
);

export default dark;
