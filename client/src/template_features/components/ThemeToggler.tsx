import { FC, Fragment } from 'react';
import { ThemeNames } from '../themes/base';
import { IconButton } from '@material-ui/core';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';

interface ThemeTogglerProps {
  themeName: string;
  setThemeName: (themeName: string) => void;
}

const ThemeToggler: FC<ThemeTogglerProps> = ({ themeName, setThemeName }) => {
  const isLightTheme = (currentThemeName: string) => {
    if (currentThemeName === ThemeNames.lightTheme) {
      return true;
    }
    return false;
  };

  return (
    <Fragment>
      <IconButton
        onClick={() => {
          setThemeName(isLightTheme(themeName) ? ThemeNames.darkTheme : ThemeNames.lightTheme);
        }}
      >
        {isLightTheme(themeName) ? <Brightness6Icon /> : <Brightness5Icon />}
      </IconButton>
    </Fragment>
  );
};

export default ThemeToggler;
