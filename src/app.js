import '@babel/polyfill';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import 'normalize.css';
import 'typeface-pt-sans';

import GlobalStyles from './utils/GlobalStyles';
import Routes from './Routes';
import configureStore from './configureStore';
import Theme from './theme';

const history = createHistory();
const store = configureStore({}, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <ConnectedRouter history={history}>
          <Fragment>
            <GlobalStyles />
            <Routes />
          </Fragment>
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['Routes'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
