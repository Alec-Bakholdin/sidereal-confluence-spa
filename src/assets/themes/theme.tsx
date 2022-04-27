import {PaletteColorOptions, PaletteMode, ThemeOptions, TypeBackground} from "@mui/material";

export const themeOptions = function ({
  mode,
  primary,
  background,
  headerColor,
}: {
  mode: PaletteMode;
  background: Partial<TypeBackground>;
  primary: PaletteColorOptions;
  headerColor: string;
}): ThemeOptions {
  return {
    palette: {
      mode: mode,
      primary: primary,
      background: background,
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
