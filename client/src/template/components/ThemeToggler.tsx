import { FC, Fragment, useContext } from 'react';
import { ThemeNames } from '../themes/base';
import { IconButton } from '@material-ui/core';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import { ThemeContext } from '../ThemeProvider';

const ThemeToggler: FC = () => {
  const { themeName, setThemeName } = useContext(ThemeContext);

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
