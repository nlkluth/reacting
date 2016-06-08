import React from 'react';
import Favorite from './Favorite';
import userActions from '../actions/user';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const mapStateToProps = (state) => ({
  list: state.list,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(userActions, dispatch)
});

class RentalList extends React.Component {
  static propTypes = {
    list: React.PropTypes.object,
    userActions: React.PropTypes.object,
    user: React.PropTypes.object
  };

  renderList() {
    return this.props.list.get('results').map((item) => {
      return (
        <div key={item.get('id')} className="col-sm-3 listing">
          <Link to={`/details/${item.get('id')}`}>
            {item.get('name')}
          </Link>
          <img src={item.get('picture_url')} alt="location" />
          <Favorite
            listing={item}
            user={this.props.user}
            favoriteListing={this.props.userActions.favoriteListing}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row">
        {this.renderList()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RentalList);
