import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { purple, green } from "@material-ui/core/colors";

let theme = createMuiTheme({
  typography: { useNeextVariants: true },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    openTitle: "#3f4771",
    protectedTitle: purple["400"],
    type: "light",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
