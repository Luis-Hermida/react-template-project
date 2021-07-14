import { Switch, Route, withRouter } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ReduxStateExample from './views/ReduxStateExample';
import ThemeSwitcher from './views/ThemeSwitcher';
import ToastExample from './views/ToastExample';
import { routes } from './Routes';

const AnimatedSwitch = withRouter(({ location }) => (
  <SwitchTransition mode={'out-in'}>
    <CSSTransition key={location.key} classNames="fade" timeout={800}>
      <Switch>
        <Route exact path={routes.themeSwitcher}>
          <ThemeSwitcher />
        </Route>
        <Route path={routes.toastExample}>
          <ToastExample />
        </Route>
        <Route path={routes.reduxExample}>
          <ReduxStateExample />
        </Route>
        {/* <Route path="*" component={} /> */}
      </Switch>
    </CSSTransition>
  </SwitchTransition>
));

function Router() {
  return <AnimatedSwitch />;
}

export default Router;
