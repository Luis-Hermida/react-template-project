import React, { Fragment, useContext } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import { ThemeContext } from "./template_components/ThemeProvider";

const App: React.FC = () => {
  const setThemeName = useContext(ThemeContext);

  return (
    <Fragment>
      <React.StrictMode>
        <div className="App">
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
        </div>
        <h1>Hola</h1>
      </React.StrictMode>
    </Fragment>
  );
};

export default App;
