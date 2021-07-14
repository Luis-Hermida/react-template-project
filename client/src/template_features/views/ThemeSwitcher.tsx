import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';
import { Button } from '@material-ui/core';
import { ThemeNames } from '../themes/base';
import ThemeToggler from '../components/ThemeToggler';

const ThemeSwitcher = () => {
  const { themeName, setThemeName } = useContext(ThemeContext);

  return (
    <div style={{ maxWidth: 600 }}>
      <div>
        <h1>Theme Switcher</h1>
        <p>
          To create a theme first you will have to create it under the themes folder using
          createMuiTheme and then add it to themeMap under ./themes/base.ts for the ThemeProvider to
          know which theme to load.
        </p>
      </div>
      <div>
        <h2>Usage of Theme Provider</h2>
        <p>
          You can add any numbers of themes and use ThemeProvider.tsx to change them at will. For
          the moment we just have 2 themes.
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setThemeName(ThemeNames.lightTheme)}
        >
          Light
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setThemeName(ThemeNames.darkTheme)}
        >
          Dark
        </Button>
      </div>
      <div>
        <h2>Custom Toggler Component</h2>
        <p>
          The way the providers give us the theme information and the function to change them let us
          build our own components easily.
        </p>
        <ThemeToggler themeName={themeName} setThemeName={setThemeName} />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
