import { FC } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ThemeSwitcher from '../views/ThemeSwitcherExample';
import ToastExample from '../views/ToastExample';
import ReduxStateExampleContainer from '../views/ReduxStateExampleContainer';
import { routes } from '../../Routes';

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
          <ReduxStateExampleContainer />
        </Route>
        {/* <Route path="*" component={} /> */}
      </Switch>
    </CSSTransition>
  </SwitchTransition>
));

const Router: FC = () => {
  return <AnimatedSwitch />;
};

export default Router;
