import React from 'react';
import ListDetail from './ListDetail';
import NewListingForm from './NewListingForm';

const RentalListView = ({ list, userActions, listActions, user }) => {
  const renderList = () => {
    return list.get('results').map((item) => {
      return (
        <ListDetail
          item={item}
          userActions={userActions}
          user={user}
          key={item.get('name')}
        />
      );
    });
  };

  return (
    <div className="row">
      {renderList()}
      <NewListingForm
        listActions={listActions}
      />
    </div>
  );
};

RentalListView.propTypes = {
  list: React.PropTypes.object,
  userActions: React.PropTypes.object,
  user: React.PropTypes.object,
  listActions: React.PropTypes.object
};

export default RentalListView;
