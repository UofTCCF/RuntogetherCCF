import { createTheme } from "@mui/material";

const YELLOW_LIGHT = "#D8D0C1";
export const YELLOW_DARK = "#E4CBA3";
export const BLUE_MAIN = "#ADC7E6";
const BLUE_DARK = "#374660";
const BLUE_LIGHT = "rgba(43,117,214,15%)";
export const GRAY = "#6C778C";
const GRAY_LIGHT = "rgba(108, 119, 140, 5%)";
const GRAY_LIGHTISH = "rgba(108, 119, 140, 40%)";
export const WHITE = "#FFFFFF";
const RED = "#F56476";
const GREEN = "#32DE8A";
const BLUE_BACKGROUND = "rgba(12, 27, 77, 0.32)";
const LIGHT_GRAY = "#C0C0C0";
const DARK_GRAY = "#A9A9A9";
const MID_GRAY = "#E1E1E1";
const BLACK = "#000000";

export const CCF_THEME = createTheme({
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontWeight: 600,
      fontSize: "6em",
    },
    h2: {
      fontSize: "2em",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.25em",
    },
    h4: {
      fontSize: "1.5em",
      fontWeight: 600,
    },
    h5: {
      fontSize: "0.85em",
      fontWeight: 600,
    },
    h6: {
      fontSize: "0.85em",
    },
    subtitle1: {
      fontSize: "1.5em",
    },
    subtitle2: {
      fontSize: "1.25em",
      fontVariant: "all-small-caps",
      fontWeight: 600,
    },
    body1: {
      fontSize: "100%",
      lineHeight: "1.65em",
    },
    body2: {
      fontSize: "0.75em",
      lineHeight: "1em",
    },
  },
  palette: {
    primary: {
      dark: YELLOW_DARK,
      main: YELLOW_LIGHT,
      light: WHITE,
    },
    secondary: {
      dark: BLUE_DARK,
      main: BLUE_MAIN,
      light: MID_GRAY,
    },
    text: {
      primary: BLACK,
      secondary: LIGHT_GRAY,
    },
    success: {
      main: GREEN,
    },
    warning: {
      main: RED,
    },
    info: {
      main: DARK_GRAY,
    },
    action: {
      main: BLUE_DARK,
    },
    splash: {
        main: BLUE_BACKGROUND,  
    },
  },
});
