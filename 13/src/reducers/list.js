import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
  loading: false,
  results: [{
    name: 'Walk Ocean Park Beach 5 min 2 bedrms',
    id: '12345',
    picture_url: 'https://a1.muscache.com/im/pictures/74274a16-cba0-4753-81bc-bf9867563dd7.jpg?aki_policy=x_medium'
  }, {
    name: 'Oceanfront Three Level Penthouse',
    id: '22345',
    picture_url: 'https://a0.muscache.com/im/pictures/93401438/48f283ee_original.jpg?aki_policy=x_medium'
  }]
});

const list = (state = defaultState, action) => {
  switch (action.type) {
    case 'LIST_FETCH_SUCCESS':
      return state;
    case 'ADD_LISTING':
      return state.set('results', state.get('results').push(Immutable.fromJS(action.payload)));
    default:
      return state;
  }
};

export default list;
