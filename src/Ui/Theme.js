import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Condensed", "sans-serif"].join(','),
    h5: {
      fontWeight: "500"
    },
    overline: {
      fontWeight: '500'
    },
    caption: {
      fontWeight: '500',
      color: '#00000'
    }
  },
});

export default theme
