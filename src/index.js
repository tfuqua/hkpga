/*eslint no-unused-vars: 0 */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { Match } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import { BrowserRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import styles from './styles/style.scss';

const store = configureStore(window.__INITIAL_STATE__);

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <IntlProvider locale="en">
        <BrowserRouter>
          <Route path="/" component={Component} />
        </BrowserRouter>
      </IntlProvider>
    </Provider>,
    document.getElementById('root')
  );
}

registerServiceWorker();

if (window.location.hash.includes('#/')) {
  window.location = window.location.hash.replace('#', '');
} else {
  render(App);
}

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(NextApp);
  });
}
