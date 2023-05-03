import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#124734",
    },
    secondary: {
      main: "#FFF2D9",
    },
    info: {
      main: "#D6832B",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 900,
      lg: 1400,
    },
  },
});

theme.typography.h1 = {
  fontFamily: "Poppins",
  fontWeight: 700,
  fontSize: 48,
  letterSpacing: 0.2,
  color: "#224635",
};

theme.typography.h2 = {
  fontFamily: "ITC Souvenir Std",
  fontWeight: 600,
  fontSize: 40,
  letterSpacing: 0.2,
  textTransform: "uppercase",
  color: "#124734",
};

theme.typography.h3 = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  fontSize: 24,
  color: "#124734",
};

theme.typography.subtitle1 = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  fontSize: 14,
  letterSpacing: 0.1,
  color: "#252B42",
};

theme.typography.subtitle2 = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  fontSize: 14,
  letterSpacing: 0.1,
  color: "#848484",
};

theme.typography.h4 = {
  fontFamily: "ITC Avant Garde Gothic Std",
  fontWeight: 700,
  fontSize: 16,
  color: "#D6832B",
};

export default createTheme(theme);
