import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Main from './src/components/Main';
import RentalList from './src/components/RentalList';
import RentalDetail from './src/components/RentalDetail';

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
