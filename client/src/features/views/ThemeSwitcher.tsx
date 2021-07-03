import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import { Button } from "@material-ui/core";

function ThemeSwitcher() {
  const setThemeName = useContext(ThemeContext);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setThemeName("lightTheme")}
      >
        Set Light Theme
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setThemeName("darkTheme")}
      >
        Set Dark Theme
      </Button>
      <h1>Hola</h1>
    </div>
  );
}

export default ThemeSwitcher;
