import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { IntlProvider } from 'react-intl';
import Main from './components/Main';
import ListView from './components/ListView';
import english from './english.json';


const routes = (
  <Route component={Main}>
    <Route path="/" component={ListView} />
  </Route>
);

const intlData = {
  locale: 'en',
  messages: english
};

const Root = () => (
  <IntlProvider {...intlData}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </IntlProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
