import { PaletteColorOptions, PaletteMode, ThemeOptions } from "@mui/material";

export const themeOptions = function ({
  mode,
  primary,
  headerColor,
}: {
  mode: PaletteMode;
  primary: PaletteColorOptions;
  headerColor: string;
}): ThemeOptions {
  return {
    palette: {
      mode: mode,
      primary: primary,
      divider: headerColor,
    },
    typography: {
      h1: {
        color: headerColor,
        fontFamily: "Raleway",
      },
      h2: {
        color: headerColor,
      },
      h3: {
        color: headerColor,
      },
      h4: {
        color: headerColor,
        fontFamily: "Play",
      },
      h5: {
        color: headerColor,
      },
      h6: {
        color: headerColor,
      },
    },
  };
};

export default themeOptions;
