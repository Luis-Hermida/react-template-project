import { FC, Fragment } from 'react';
import { ThemeNames } from '../themes/base';
import { makeStyles } from '@material-ui/core';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';

interface ThemeTogglerProps {
  themeName: string;
  setThemeName: (themeName: string) => void;
}

const useStyles = makeStyles((theme) => ({
  button: {
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    padding: 4,
    borderRadius: 4,
    cursor: 'pointer',
  },
}));

const ThemeToggler: FC<ThemeTogglerProps> = ({ themeName, setThemeName }) => {
  const classes = useStyles();

  const isLightTheme = (currentThemeName: string) => {
    if (currentThemeName === ThemeNames.lightTheme) {
      return true;
    }
    return false;
  };

  return (
    <Fragment>
      <div
        className={classes.button}
        onClick={() => {
          setThemeName(isLightTheme(themeName) ? ThemeNames.darkTheme : ThemeNames.lightTheme);
        }}
      >
        {isLightTheme(themeName) ? <Brightness6Icon /> : <Brightness5Icon />}
      </div>
    </Fragment>
  );
};

export default ThemeToggler;
