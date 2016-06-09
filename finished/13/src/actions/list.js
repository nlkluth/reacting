const listActions = {
  addListing(payload) {
    return {
      type: 'ADD_LISTING',
      payload
    };
  }
};

export default listActions;
