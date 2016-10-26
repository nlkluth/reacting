import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  list: state
});

class RentalList extends React.Component {
  static propTypes = {
    list: React.PropTypes.object
  };

  render() {
    return (
      <div>List: {this.props.list.name}</div>
    );
  }
}

export default connect(mapStateToProps)(RentalList);
