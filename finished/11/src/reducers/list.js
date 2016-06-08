const defaultState = {
  loading: false,
  results: [{
    name: 'Estes Park',
    id: '12345',
    picture_url: 'http://placehold.it/250x250'
  }, {
    name: 'Denver',
    id: '22345',
    picture_url: 'http://placehold.it/250x250'
  }]
};

const list = (state = defaultState, action) => {
  switch (action.type) {
    case 'LIST_FETCH_SUCCESS':
      return state;
    default:
      return state;
  }
};

export default list;
