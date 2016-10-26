import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import Main from './components/Main';
import RentalListContainer from './components/RentalListContainer';
import RentalDetailContainer from './components/RentalDetailContainer';
import configureStore from './store/configureStore';
import english from './english.json';
import './styles/main.scss';

const store = configureStore();

const routes = (
  <Route component={Main}>
    <Route path="/" component={RentalListContainer} />
    <Route path="/details/:id" component={RentalDetailContainer} />
  </Route>
);

const intlData = {
  locale: 'en',
  messages: english
};

const Root = () => (
  <Provider store={store}>
    <IntlProvider {...intlData}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </IntlProvider>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
