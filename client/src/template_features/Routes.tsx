import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

export const routes = Object.freeze({
  home: '/',
  themeSwitcher: '/features/themeSwitcher',
  toastExample: '/features/toastExample',
  reduxExample: '/features/reduxExample',
});

export const RedirectTo = (route: string) => {
  const index = Object.values(routes).indexOf(route);
  if (index >= 0) {
    customHistory.push(route);
  }
};
