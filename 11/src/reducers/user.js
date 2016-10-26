const defaultState = {
  favorites: []
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case 'FAVORITE_LISTING':
      return Object.assign({}, state, {
        favorites: [...state.favorites, action.payload]
      });
    default:
      return state;
  }
};

export default user;
