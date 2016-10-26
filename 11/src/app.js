import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Main from './components/Main';
import RentalList from './components/RentalList';
import RentalDetail from './components/RentalDetail';
import configureStore from './store/configureStore';
import './styles/main.scss';

const store = configureStore();

const routes = (
  <Route component={Main}>
    <Route path="/" component={RentalList} />
    <Route path="/details/:id" component={RentalDetail} />
  </Route>
);

const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
