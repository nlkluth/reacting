import React from 'react';
import { connect } from 'react-redux';
import RentalDetailView from './RentalDetailView';

const mapStateToProps = (state) => ({
  list: state.list
});

class RentalDetailContainer extends React.Component {
  static propTypes = {
    list: React.PropTypes.object,
    params: React.PropTypes.object
  };

  render() {
    const index = this.props.list.get('results').findIndex((detail) => {
      return detail.get('id') === this.props.params.id;
    });

    const detail = this.props.list.getIn(['results', index]);

    return (
      <RentalDetailView
        detail={detail}
      />
    );
  }
}

export default connect(mapStateToProps)(RentalDetailContainer);
