import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Main from './components/Main';
import RentalList from './components/RentalList';
import RentalDetailContainer from './components/RentalDetailContainer';
import configureStore from './store/configureStore';
import { IntlProvider } from 'react-intl';
import english from './english.json';
import './styles/main.scss';

const store = configureStore();

const routes = (
  <Route component={Main}>
    <Route path="/" component={RentalList} />
    <Route path="/details/:id" component={RentalDetailContainer} />
  </Route>
);

class Root extends React.Component {
  render() {
    const intlData = {
      locale: 'en',
      messages: english
    };

    return (
      <Provider store={store}>
        <IntlProvider {...intlData}>
          <Router history={browserHistory}>
            {routes}
          </Router>
        </IntlProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
