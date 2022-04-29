import {
  PaletteColorOptions,
  PaletteMode,
  ThemeOptions,
  TypeBackground,
} from "@mui/material";

export const themeOptions = function ({
  mode,
  primary,
  background,
  header1234color,
  header56color,
}: {
  mode: PaletteMode;
  background: Partial<TypeBackground>;
  primary: PaletteColorOptions;
  header1234color: string;
  header56color: string;
}): ThemeOptions {
  return {
    palette: {
      mode: mode,
      primary: primary,
      background: background,
      divider: header1234color,
    },
    typography: {
      h1: {
        color: header1234color,
        fontFamily: "Raleway",
      },
      h2: {
        color: header1234color,
        fontFamily: "Raleway",
      },
      h3: {
        color: header1234color,
        fontFamily: "Raleway",
      },
      h4: {
        color: header1234color,
        fontFamily: "Play",
      },
      h5: {
        color: header56color,
        fontFamily: "Play",
      },
      h6: {
        color: header56color,
      },
    },
  };
};

export default themeOptions;
