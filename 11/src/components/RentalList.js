import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Favorite from './Favorite';
import userActions from '../actions/user';

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
    user: React.PropTypes.object,
    userActions: React.PropTypes.object
  };

  renderList() {
    return this.props.list.results.map((item) => {
      return (
        <div key={item.id} className="col-sm-3 listing">
          <Link to={`/details/${item.id}`}>
            {item.name}
          </Link>
          <img src={item.picture_url} alt="location" />
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
