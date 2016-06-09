import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
  favorites: []
});

const user = (state = defaultState, action) => {
  switch (action.type) {
    case 'FAVORITE_LISTING':
      return state.set('favorites', state.get('favorites').push(action.payload));
    default:
      return state;
  }
};

export default user;
