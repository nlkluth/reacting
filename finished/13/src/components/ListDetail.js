import React from 'react';
import { Link } from 'react-router';
import Favorite from './Favorite';

const ListDetail = ({ item, userActions, user }) => (
  <div key={item.get('id')} className="col-sm-4 listing">
    <div>
      <Link
        to={`/details/${item.get('id')}`}
        className="detail-link"
        title={item.get('name')}
      >
        <img src={item.get('picture_url')} alt="location" />
        <h3>{item.get('name')}</h3>
      </Link>
    </div>
    <Favorite
      listing={item}
      user={user}
      favoriteListing={userActions.favoriteListing}
    />
  </div>
);

ListDetail.propTypes = {
  item: React.PropTypes.object,
  userActions: React.PropTypes.object,
  user: React.PropTypes.object
};

export default ListDetail;
