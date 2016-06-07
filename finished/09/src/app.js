import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Main from './components/Main';
import RentalList from './components/RentalList';
import RentalDetail from './components/RentalDetail';
import { createStore, compose } from 'redux';
import './styles/main.scss';

// class Root extends React.Component {
//   render() {
//     return (
//       <Router history={browserHistory}>
//         <Route component={Main}>
//           <Route path="/" component={RentalList} />
//           <Route path="/details" component={RentalDetail} />
//         </Route>
//       </Router>
//     );
//   }
// }

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(counter, window.__initial__, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

class Counter extends React.Component {
  render() {
    return (
      <div>
        Clicked: {this.props.count}
        <button onClick={() => store.dispatch({type: 'INCREMENT'})}>Increment</button>
      </div>
    );
  }
}


const render = () => {
  ReactDOM.render(<Counter count={store.getState()} />, document.getElementById('root'));
};

render();
store.subscribe(render);
