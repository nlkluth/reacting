import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  list: state.list
});

class RentalDetail extends React.Component {
  static propTypes = {
    list: React.PropTypes.object,
    params: React.PropTypes.object
  };

  render() {
    const index = this.props.list.results.findIndex((detail) => {
      return detail.id === this.props.params.id;
    });

    const detail = this.props.list.results[index];

    return (
      <div>
        Detail: {detail.name}
        <img src={detail.picture_url} alt="location" />
      </div>
    );
  }
}

export default connect(mapStateToProps)(RentalDetail);
