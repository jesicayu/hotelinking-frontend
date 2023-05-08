import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
      primary: {
        main: "#014421",
      },
      secondary: {
        main: "#FA7711",
      },
      background: {
        default: "#F6E9D2"
      },
    },
    typography: {
      fontFamily: "Poppins",
      fontWeightLight: 300,
      fontWeightRegular: 500,
      fontWeightMedium: 700,
    },

  });