import { useState, FC, createContext } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core/styles";
import { themeCreator } from "../themes/base";
import CssBaseline from "@material-ui/core/CssBaseline";

export const ThemeContext = createContext((themeName: string): void => {});

const ThemeProvider: FC = (props) => {
  // State to hold the selected theme name
  const [themeName, setThemeName] = useState("darkTheme");

  // Retrieve the theme object by theme name
  // Material UI doesn't fully support Strict mode so for the theme toggler to work
  // we can create a Strict Mode Theme (Don't know the disadvantages)
  // OR it has to be outside Strict mode cointainer.
  const theme = unstable_createMuiStrictModeTheme(themeCreator(themeName));

  return (
    <ThemeContext.Provider value={setThemeName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
