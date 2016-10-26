import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const configureStore = () => {
  const store = createStore(rootReducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      /* eslint-disable global-require */
      const nextRootReducer = require('../reducers/index').default;
      /* eslint-enable global-require */

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
