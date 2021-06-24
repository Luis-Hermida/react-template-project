import { useState, FC, createContext } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { themeCreator } from "./themes/base";

export const ThemeContext = createContext((themeName: string): void => {});

const ThemeProvider: FC = (props) => {
  // State to hold the selected theme name
  const [themeName, setThemeName] = useState("darkTheme");

  // Retrieve the theme object by theme name
  const theme = themeCreator(themeName);

  return (
    <ThemeContext.Provider value={setThemeName}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
