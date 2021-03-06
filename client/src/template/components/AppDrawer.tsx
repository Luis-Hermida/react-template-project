import { Fragment, useState, FC, useContext } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import ThemeToggler from './ThemeToggler';
import Router from './Router';
import { ThemeContext } from '../ThemeProvider';
import { routes } from '../../Routes';

const drawerWidth = '240px';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    height: 64,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  header: {
    padding: 8,
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  headerSection: {
    margin: '0 24px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: 24,
    marginTop: 64,
  },
}));

const App: FC = (props: any) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Fragment>
      <Link style={{ color: theme.palette.text.primary }} to={routes.themeSwitcher}>
        Theme Switcher
      </Link>
      <Link style={{ color: theme.palette.text.primary }} to={routes.toastExample}>
        Toast Example
      </Link>
      <Link style={{ color: theme.palette.text.primary }} to={routes.reduxExample}>
        Redux Example
      </Link>
    </Fragment>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <div className={classes.headerSection}>
            <IconButton
              color="secondary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.headerSection}>
            <ThemeToggler />
          </div>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <Router />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
