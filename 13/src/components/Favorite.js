import React from 'react';

class Favorite extends React.Component {
  static propTypes = {
    listing: React.PropTypes.object,
    user: React.PropTypes.object,
    favoriteListing: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.favoriteListing(this.props.listing.get('id'));
  }

  render() {
    const favorite = this.props.user.get('favorites').some((item) => {
      return item === this.props.listing.get('id');
    });

    if (favorite) {
      return (
        <i className="fa fa-heart" />
      );
    }

    return (
      <i className="fa fa-heart-o" onClick={this.handleClick} />
    );
  }
}

export default Favorite;
