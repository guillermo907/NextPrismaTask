import { createTheme } from "@mui/material";

const mainColor = "#3e3ea0";
const secondaryColor = "#34ebe5";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: mainColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: "#f2f4f6",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: mainColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: "#293241",
    },
  },
});
