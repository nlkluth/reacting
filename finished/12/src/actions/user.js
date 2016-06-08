const userActions = {
  favoriteListing(id) {
    return {
      type: 'FAVORITE_LISTING',
      payload: id
    };
  }
};

export default userActions;
