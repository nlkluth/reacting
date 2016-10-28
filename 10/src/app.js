import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './components/Main';
import RentalList from './components/RentalList';
import RentalDetail from './components/RentalDetail';
import './styles/main.scss';

const rentals = (state = { name: 'Estes Park' }) => {
  return state;
};

const store = createStore(rentals);

const routes = (
  <Route component={Main}>
    <Route path="/" component={RentalList} />
    <Route path="/details" component={RentalDetail} />
  </Route>
);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
