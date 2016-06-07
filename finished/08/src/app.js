import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Main from './components/Main';
import RentalList from './components/RentalList';
import RentalDetail from './components/RentalDetail';
import './styles/main.scss';

class Root extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Main}>
          <Route path="/" component={RentalList} />
          <Route path="/details" component={RentalDetail} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
