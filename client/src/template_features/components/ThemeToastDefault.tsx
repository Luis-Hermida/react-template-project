import { Button } from '@material-ui/core';
import { FC, useContext } from 'react';
import { toast } from 'react-toastify';
import { ThemeContext } from '../ThemeProvider';
import { ThemeNames } from '../themes/base';

const ThemeToastDefault: FC = () => {
  const { themeName } = useContext(ThemeContext);

  const notify = () => {
    switch (themeName) {
      case ThemeNames.lightTheme:
        toast('Theme Toast', {});
        break;
      case ThemeNames.darkTheme:
        toast.dark('Theme Toast', {});
        break;
      default:
        break;
    }
  };

  return (
    <Button variant="contained" onClick={notify} color="primary">
      Notify
    </Button>
  );
};

export default ThemeToastDefault;
