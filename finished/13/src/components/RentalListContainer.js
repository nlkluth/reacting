import React from 'react';
import RentalListView from './RentalListView';
import userActions from '../actions/user';
import listActions from '../actions/list';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  list: state.list,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(userActions, dispatch),
  listActions: bindActionCreators(listActions, dispatch)
});

class RentalListContainer extends React.Component {
  static propTypes = {
    list: React.PropTypes.object,
    userActions: React.PropTypes.object,
    user: React.PropTypes.object,
    listActions: React.PropTypes.object
  };

  render() {
    return (
      <RentalListView
        list={this.props.list}
        userActions={this.props.userActions}
        user={this.props.user}
        listActions={this.props.listActions}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RentalListContainer);
