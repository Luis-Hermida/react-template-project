import { useState, FC, createContext } from 'react';
import { MuiThemeProvider, Theme } from '@material-ui/core';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { themeCreator, ThemeNames } from './themes/base';
import CssBaseline from '@material-ui/core/CssBaseline';

interface ThemeContextValues {
  theme?: Theme;
  themeName: string;
  setThemeName: (themeName: string) => void;
}

export const ThemeContext = createContext<ThemeContextValues | any>({
  setThemeName: () => {},
});

const ThemeProvider: FC = (props) => {
  const [themeName, setThemeName] = useState<string>(ThemeNames.lightTheme);

  // Retrieve the theme object by theme name
  // Material UI doesn't fully support Strict mode so for the theme toggler to work
  // we can create a Strict Mode Theme (Don't know the disadvantages)
  // OR it has to be outside Strict mode cointainer.
  const theme = unstable_createMuiStrictModeTheme(themeCreator(themeName));

  const contextValue: ThemeContextValues = {
    theme,
    themeName,
    setThemeName,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
