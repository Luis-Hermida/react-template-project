import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import { Button } from "@material-ui/core";

function ThemeSwitcher() {
  const setThemeName = useContext(ThemeContext);

  return (
    <div>
      <h1>Theme Switcher</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setThemeName("lightTheme")}
      >
        Light
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setThemeName("darkTheme")}
      >
        Dark
      </Button>
    </div>
  );
}

export default ThemeSwitcher;
