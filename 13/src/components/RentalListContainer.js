import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RentalListView from './RentalListView';
import userAction from '../actions/user';
import listAction from '../actions/list';

const mapStateToProps = (state) => ({
  list: state.list,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(userAction, dispatch),
  listActions: bindActionCreators(listAction, dispatch)
});

const RentalListContainer = ({ list, userActions, user, listActions }) => (
  <RentalListView
    list={list}
    userActions={userActions}
    user={user}
    listActions={listActions}
  />
);

RentalListContainer.propTypes = {
  list: React.PropTypes.object,
  userActions: React.PropTypes.object,
  user: React.PropTypes.object,
  listActions: React.PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(RentalListContainer);
